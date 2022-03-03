import * as React from "react";
import { pipeline } from "stream";
import { renderToString } from "react-dom/server";
// import { pipeToNodeWritable } from "react-dom/server";
import { pipeToNodeWritable } from "./streamableReactServer.js";
import App from "../src/App";
import { DataProvider } from "../src/data";
import { API_DELAY, ABORT_DELAY } from "./delays";

import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

// In a real setup, you'd read it from webpack build stats.
let assets = {
  "main.js": "/main.js",
  "main.css": "/main.css"
};

module.exports = function render(url, res) {
  // This is how you would wire it up previously:
  //
  // res.send(
  //   "<!DOCTYPE html>" +
  //     renderToString(
  //       <DataProvider data={data}>
  //         <App assets={assets} />
  //       </DataProvider>
  //     )
  // );

  // The new wiring is a bit more involved.
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  let didError = false;

  const key = "custom";
  const cache = createCache({ key });
  const {
    extractCriticalToChunks,
    constructStyleTagsFromChunks
  } = createEmotionServer(cache);

  const data = createServerData();
  const stream = pipeToNodeWritable(
    <CacheProvider value={cache}>
      <DataProvider data={data}>
        <App assets={assets} />
      </DataProvider>
    </CacheProvider>
  )
    .on("open", () => {
      // If something errored before we started streaming, we set the error code appropriately.
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html");
      res.write("<!DOCTYPE html>");
      // stream.startWriting();
    })
    .on("ready", () => {
      stream.startWriting();
    })
    .on("error", (err) => {
      console.log("err");
    });

  pipeline(
    stream,
    async function* cssInJsCapture(readable) {
      readable.setEncoding("utf-8");

      for await (const chunk of readable) {
        const { html, styles } = extractCriticalToChunks(chunk);
        const styleTag = constructStyleTagsFromChunks({ html, styles });

        yield `${styleTag}${html}`;
      }
    },
    res,
    (err) => {
      if (err) {
        didError = true;
        console.error(err);
      }

      res.end();
    }
  );

  // Abandon and switch to client rendering if enough time passes.
  // Try lowering this to see the client recover.
  setTimeout(() => stream.abort(), ABORT_DELAY);
};

// Simulate a delay caused by data fetching.
// We fake this because the streaming HTML renderer
// is not yet integrated with real data fetching strategies.
function createServerData() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, API_DELAY);
      });
      throw promise;
    }
  };
}

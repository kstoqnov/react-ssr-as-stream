import { jsx } from "@emotion/react";
import { hydrateRoot } from "react-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import App from "./App";
const cache = createCache({ key: "custom" });

hydrateRoot(
  document,
  <CacheProvider value={cache}>
    <App assets={window.assetManifest} />
  </CacheProvider>
);

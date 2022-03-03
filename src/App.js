import { jsx, css, Global } from "@emotion/react";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Html from "./Html";
import Spinner from "./Spinner";
import Layout from "./Layout";
import NavBar from "./NavBar";

const Comments = lazy(() => import("./Comments" /* webpackPrefetch: true */));
const Sidebar = lazy(() => import("./Sidebar" /* webpackPrefetch: true */));
const Post = lazy(() => import("./Post" /* webpackPrefetch: true */));

export default function App({ assets }) {
  return (
    <Html assets={assets} title="Hello">
      <Global
        styles={{
          body: {
            fontFamily: "system-ui, sans-serif"
          },

          "*": {
            boxSizing: "border-box"
          },

          "h1,h2": {
            padding: 0
          },

          "ul,li": {
            margin: 0
          }
        }}
      />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  return (
    <Layout>
      <NavBar />
      <aside
        css={css({
          padding: "10px",
          height: "500px",
          float: "left",
          width: "30%"
        })}
      >
        <Suspense fallback={<Spinner />}>
          <Sidebar />
        </Suspense>
      </aside>
      <article
        css={{
          padding: "20px",
          float: "left",
          width: "60%",

          p: {
            fontSize: "larger",
            fontFamily: "Georgia, serif"
          }
        }}
      >
        <Suspense fallback={<Spinner />}>
          <Post />
        </Suspense>
        <section
          css={css({
            marginTop: "40px"
          })}
        >
          <h2>Comments</h2>
          <Suspense fallback={<Spinner />}>
            <Comments />
          </Suspense>
        </section>
        <h2>Thanks for reading!</h2>
      </article>
    </Layout>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}

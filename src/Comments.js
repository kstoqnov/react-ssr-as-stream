import * as React from "react";
import { jsx, css } from "@emotion/react";
import { useData } from "./data";

export default function Comments() {
  const comments = useData();
  return (
    <>
      {comments.map((comment, i) => (
        <p
          css={css({
            border: "2px solid #aaa",
            borderRadius: "4px",
            padding: "20px"
          })}
          key={i}
        >
          {comment}
        </p>
      ))}
    </>
  );
}

import { jsx, css, keyframes } from "@emotion/react";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export default function Spinner({ active = true }) {
  return (
    <div
      css={css({
        display: "inline-block",
        transition: "opacity linear 0.1s",
        width: "20px",
        height: "20px",
        border: "3px solid rgba(80, 80, 80, 0.5)",
        borderRadius: "50%",
        borderTopColor: "#fff",
        animation: `${spin} 1s ease-in-out infinite`,
        opacity: 0,
        '&[aria-busy="true"]': {
          opacity: 1
        }
      })}
      role="progressbar"
      aria-busy={active ? "true" : "false"}
    />
  );
}

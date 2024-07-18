import stitches from "../../stitches.config";

const ContainerLogin = stitches.styled("div", {
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",

  marginRight: "auto",
  marginLeft: "auto",

  maxWidth: "16em",

  "@sm": {
    maxWidth: "16em",
  },
  "@md": {
    maxWidth: "32em",
  },
  "@lg": {
    maxWidth: "64em",
  },
});

export { ContainerLogin };

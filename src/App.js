import React from "react";
import { Frame, Page } from "framer";
import "./App.css";

const App = () => {
  return (
    <Page
      overflow="hidden"
      width="60vw"
      height="80vh"
      momentum
      defaultEffect={"cube"}
      alignment="center"
      currentPage={1}
    >
      <Frame scale={0.9} background="fff" radius={60}>
        About Me
      </Frame>
      <Frame scale={0.9} background="fff" radius={60}>
        Portfolio
      </Frame>
      <Frame scale={0.9} background="fff" radius={60}>
        Contact Me
      </Frame>
    </Page>
  );
};

export default App;

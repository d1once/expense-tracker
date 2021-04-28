import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";

ReactDom.render(
  <SpeechProvider appId="d9a6f97e-f619-469c-9fcd-421af38fbc19" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);

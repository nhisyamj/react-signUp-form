import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

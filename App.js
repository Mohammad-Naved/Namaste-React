import React from "react";
import ReactDOM from "react-dom/client";

const Heading =()=> (<h1>Hello from functional component</h1>);

const FunctionalComponent=()=>(
  <div>
    {Heading()}
    <Heading/>
    <Heading></Heading>
    <h1 id="heading">This is functional component</h1>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent/>);

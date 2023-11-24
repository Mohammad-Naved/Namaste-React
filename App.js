import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 id="heading">Salam React By JSX</h1>;

//React Component
const Title = () => <h1>Title</h1>;
//React component
const HeadingComponent = () => (
  <div>
        <Title />
    <h1 id="heading">This is functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <HeadingComponent />
);

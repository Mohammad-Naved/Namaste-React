const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1"),
    React.createElement("h2", {}, "I'm H"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1"),
    React.createElement("h2", {}, "I'm H"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

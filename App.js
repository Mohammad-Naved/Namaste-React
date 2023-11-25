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

//HomeWork

// const Header=()=>(
//   <div className="flex">
//     <img className="logo-image" src={"https:media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI="}></img>
//   <input type="text" placeholder="Search.."></input>
//   <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqWNCu5PKphREwyLSVJcWREXqe-9ny7kzSmjE9SmsfA&s" }/>
//   </div>
//   )
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent/>);

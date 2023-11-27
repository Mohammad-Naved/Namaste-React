import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD

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
=======

//Header
//  Logo
//  Nav-items
//Body
//  searchBar
//  Cards

const Header = () => (
  <div className="header">
    <img
      className="logo"
      src={
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
      }
    />
    <ul className="nav-items">
      <li>Home</li>
      <li>about us</li>
      <li>Saved item</li>
    </ul>
  </div>
);

const ResturantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ad35a5347b01d534bf507be1d8aa4030"
      ></img>
      <h3>Al Baik</h3>
      <h4>4.3</h4>
      <h4>Biryni,Crispy Chicken and Roasted</h4>
      <h4>35 minitues</h4>

    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
      <input className="search-bar" type="text" placeholder="Enter your Resturant name"></input>
      <button className="search-btn" type="submit">Search</button>
      </div>
      <ResturantCard />
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

// const Heading =()=> (<h1>Hello from functional component</h1>);

// const FunctionalComponent=()=>(
//   <div>
//     {Heading()}
//     <Heading/>
//     <Heading></Heading>
//     <h1 id="heading">This is functional component</h1>
//   </div>
// )

// //HomeWork

// // const Header=()=>(
// //   <div className="flex">
// //     <img className="logo-image" src={"https:media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI="}></img>
// //   <input type="text" placeholder="Search.."></input>
// //   <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqWNCu5PKphREwyLSVJcWREXqe-9ny7kzSmjE9SmsfA&s" }/>
// //   </div>
// //   )
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
>>>>>>> feature

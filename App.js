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

const ResturantCard = (props) => {
  const {resOBJ}=props;
  const {cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating}=resOBJ?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

const resLIST=[{
  "info": {
  "id": "82387",
  "name": "Red Dragon (Chopstix)",
  "cloudinaryImageId": "f6etwqizmuaxxe21vxmu",
  "locality": "Sector C",
  "areaName": "Mahanagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Chinese",
  "Arabian"
  ],
  "avgRating": 3.8,
  "feeDetails": {
  "restaurantId": "82387",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 3000
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 3000
  },
  "parentId": "168369",
  "avgRatingString": "3.8",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 30,
  "lastMileTravel": 5,
  "serviceability": "SERVICEABLE",
  "slaString": "30 mins",
  "lastMileTravelString": "5.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-29 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹199",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/red-dragon-chopstix-sector-c-mahanagar-lucknow-82387",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "59795",
  "name": "New Manish Eating Point",
  "cloudinaryImageId": "d7dzylheilt7ro2u7uad",
  "locality": "Patrakar Puram",
  "areaName": "Gomti Nagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Mughlai",
  "North Indian",
  "Chinese"
  ],
  "avgRating": 3.9,
  "feeDetails": {
  "restaurantId": "59795",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 4000
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 4000
  },
  "parentId": "147237",
  "avgRatingString": "3.9",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 36,
  "lastMileTravel": 7.8,
  "serviceability": "SERVICEABLE",
  "slaString": "36 mins",
  "lastMileTravelString": "7.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-28 23:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/new-manish-eating-point-patrakar-puram-gomti-nagar-lucknow-59795",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "165050",
  "name": "Mahalaxmi Sweets & Restaurant",
  "cloudinaryImageId": "oqk0mierg0rlhuxoa3ok",
  "locality": "Purania Road",
  "areaName": "Aliganj",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Indian",
  "North Indian"
  ],
  "avgRating": 4.2,
  "veg": true,
  "feeDetails": {
  "restaurantId": "165050",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 4000
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 4000
  },
  "parentId": "262175",
  "avgRatingString": "4.2",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 33,
  "lastMileTravel": 7.3,
  "serviceability": "SERVICEABLE",
  "slaString": "33 mins",
  "lastMileTravelString": "7.3 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-28 22:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹199",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/mahalaxmi-sweets-and-restaurant-purania-road-aliganj-lucknow-165050",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "231204",
  "name": "Burger King",
  "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  "locality": "Hazratganj",
  "areaName": "Hazratganj",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Burgers",
  "American"
  ],
  "avgRating": 4.1,
  "feeDetails": {
  "restaurantId": "231204",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 2000
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 2000
  },
  "parentId": "166",
  "avgRatingString": "4.1",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 1,
  "serviceability": "SERVICEABLE",
  "slaString": "22 mins",
  "lastMileTravelString": "1.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-29 03:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹129"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/burger-king-hazratganj-lucknow-231204",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "89361",
  "name": "La Pino'z Pizza",
  "cloudinaryImageId": "dek7ifvgfbnddngpqn4r",
  "locality": "Hazratganj",
  "areaName": "Hazratganj",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Italian",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 3.9,
  "feeDetails": {
  "restaurantId": "89361",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 2600
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 2600
  },
  "parentId": "4961",
  "avgRatingString": "3.9",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 0.9,
  "serviceability": "SERVICEABLE",
  "slaString": "22 mins",
  "lastMileTravelString": "0.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-29 04:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-hazratganj-lucknow-89361",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "60379",
  "name": "Pizza Hut",
  "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  "locality": "Saharaganj Mall",
  "areaName": "Hazratganj",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Pizzas"
  ],
  "avgRating": 3.9,
  "feeDetails": {
  "restaurantId": "60379",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 2000
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 2000
  },
  "parentId": "721",
  "avgRatingString": "3.9",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 1.8,
  "serviceability": "SERVICEABLE",
  "slaString": "35 mins",
  "lastMileTravelString": "1.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-28 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "FREE ITEM"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/pizza-hut-saharaganj-mall-hazratganj-lucknow-60379",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "253774",
  "name": "McDonald's",
  "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
  "locality": "Fun Republic Mall",
  "areaName": "Gomti Nagar",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "American"
  ],
  "avgRating": 4.2,
  "feeDetails": {
  "restaurantId": "253774",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 3400
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 3400
  },
  "parentId": "630",
  "avgRatingString": "4.2",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 28,
  "lastMileTravel": 4.4,
  "serviceability": "SERVICEABLE",
  "slaString": "28 mins",
  "lastMileTravelString": "4.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-28 23:45:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "UPTO ₹40"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/mcdonalds-fun-republic-mall-gomti-nagar-lucknow-253774",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "405025",
  "name": "KFC",
  "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  "locality": "Sahara Ganj Mall",
  "areaName": "Hazratganj",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Biryani",
  "American",
  "Snacks",
  "Fast Food"
  ],
  "avgRating": 4.1,
  "feeDetails": {
  "restaurantId": "405025",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 2700
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 2700
  },
  "parentId": "547",
  "avgRatingString": "4.1",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 1.8,
  "serviceability": "SERVICEABLE",
  "slaString": "25 mins",
  "lastMileTravelString": "1.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-28 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/kfc-sahara-ganj-mall-hazratganj-lucknow-405025",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "59284",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "jd3b24bmmmwsdpezahj5",
  "locality": "Hazratganj",
  "areaName": "Hazratganj",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Pastas",
  "Desserts"
  ],
  "avgRating": 4.3,
  "feeDetails": {
  "restaurantId": "59284",
  "fees": [
  {
  "name": "BASE_DISTANCE",
  "fee": 2000
  },
  {
  "name": "BASE_TIME"
  },
  {
  "name": "ANCILLARY_SURGE_FEE"
  }
  ],
  "totalFee": 2000
  },
  "parentId": "2456",
  "avgRatingString": "4.3",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 25,
  "serviceability": "SERVICEABLE",
  "slaString": "25 mins",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2023-11-29 03:59:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹999",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
  "link": "https://www.swiggy.com/restaurants/dominos-pizza-hazratganj-lucknow-59284",
  "type": "WEBLINK"
  }
  }];


const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter your Resturant name"
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
      <div className="resCard">
      {resLIST.map((resturant)=>(
        <ResturantCard key={resturant.info.id} resOBJ={resturant}/>
      ) )}
      </div>
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

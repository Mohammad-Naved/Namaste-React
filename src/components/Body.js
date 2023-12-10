import ResturantCard from "./ResturantCard";
import resLIST from "../utility/apiData";

import { useState } from "react";

const Body = () => {
const [resturantListData,setResturantListData]=useState(resLIST);
const [resbutton,setResbutton]=useState(false);

const toggleButton=()=>{
  setResturantListData(filteredRes);
}

const filteredRes=resLIST.filter((resLIST) => resLIST.info.avgRating > 4);
let resturants=[];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          type="submit"
          onClick={() => {
            {toggleButton(true)}
            setResbutton(!resbutton)
          }}
        >
          {resbutton ? 'All Resturant' : 'Top-Rated Resturant'}
        </button>
        
      </div>
      <div className="resCard">

        {resturantListData.map((resturant) => (
          <ResturantCard key={resturant.info.id} resOBJ={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

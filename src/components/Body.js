import ResturantCard from "./ResturantCard";
import resLIST from "../utility/apiData";

import { useState } from "react";

const Body = () => {
const [resturantListData,setResturantListData]=useState(resLIST);


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          type="submit"
          onClick={() => {
            const filteredRes=resLIST.filter((resLIST) => resLIST.info.avgRating > 4);
            setResturantListData(filteredRes);
            
          }}
        >
          Top rated resturant
        </button>
        <button
          className="filter-btn"
          type="submit"
          onClick={() => {
            
            setResturantListData(resLIST);
            
          }}
        >
          All Resturant
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

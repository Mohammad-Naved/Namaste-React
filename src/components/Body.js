import { SWIGGYAPI } from "../utility/url";
import ResturantCard from "./ResturantCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [resturantListData, setResturantListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPI);
    const json = await data.json();
    setResturantListData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filteredRes = resturantListData.filter(
    (resturantListData) => resturantListData.info.avgRating > 4
  );
  let resturants = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          type="submit"
          onClick={() => {
            setResturantListData(filteredRes);
          }}
        >
          Top-Rated Resturant
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

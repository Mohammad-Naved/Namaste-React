import { SWIGGYAPI } from "../utility/url";
import ResturantCard from "./ResturantCard";
import Shiver from "./Shiver";
import { useEffect, useState } from "react";

const Body = () => {
  const [resturantListData, setResturantListData] = useState([]);
  const [filteredListData, setFilteredListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGYAPI);
    const json = await data.json();
    console.log(json);
    setResturantListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filteredRes = resturantListData.filter(
    (resturantListData) => resturantListData.info.avgRating > 4.3
  );

  let resturants = [];

  return resturantListData.length === 0 ? (
    <Shiver />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <button
            className="filter-btn"
            type="submit"
            onClick={() => {
              setFilteredListData(filteredRes);
            }}
          >
            Top-Rated Resturant
          </button>
        </div>
        <div className="search-filter">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filter = resturantListData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filter);
              setFilteredListData(filter);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            type="submit"
            onClick={() => {
              setFilteredListData(resturantListData);
            }}
          >
            All Resturant
          </button>
        </div>
      </div>
      <div className="resCard">
        {filteredListData.map((resturant) => (
          <ResturantCard key={resturant.info.id} resOBJ={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

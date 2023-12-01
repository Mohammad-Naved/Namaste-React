import ResturantCard from "./ResturantCard";
import resLIST from "../utility/apiData";

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
          {resLIST.map((resturant) => (
            <ResturantCard key={resturant.info.id} resOBJ={resturant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
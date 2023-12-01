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

  export default ResturantCard;
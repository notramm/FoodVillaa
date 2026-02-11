import { IMG_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card">
  <img
    className="res-logo"
    src={IMG_URL + cloudinaryImageId}
    alt={name}
  />
  <div className="res-card-content">
    <h3 className="res-card-title">{name}</h3>
    <p className="res-card-cuisine">{cuisines.join(", ")}</p>
    
    
    <div className="res-card-meta">
      <span className="res-card-rating">{avgRating}</span>
      <span className="res-card-divider">•</span>
      <span className="res-card-cost">{costForTwo}</span>
    </div>
    
    <div className="res-card-delivery">
      {sla?.slaString}
    </div>
  </div>
</div>

  );
};

export default RestaurantCard;

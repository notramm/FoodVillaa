import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RES_MENU } from "../utils/contants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.find((card) => card?.card?.card?.info)?.card
    ?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  if (!info) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } = info;

  return (
    <div className="menu-container">
  <div className="menu-header">
    <h1 className="restaurant-name">{name}</h1>
    <h3 className="restaurant-cuisines">{cuisines?.join(", ")}</h3>
  </div>

  <ul className="restaurant-stats">
    <li className="stat-item rating">
      <span className="rating-value">{avgRatingString}</span> ⭐
    </li>
    <li className="stat-item cost">{costForTwoMessage}</li>
  </ul>

  <h3 className="menu-title">Menu</h3>

  <ul className="menu-items">
    {itemCards.map((item) => {
      const info = item?.card?.info;
      const price = info?.price ?? info?.defaultPrice;
      const rating = info?.ratings?.aggregatedRating?.rating;

      return (
        <li key={info?.id} className="menu-item">
          <div className="item-details">
            <span className="item-name">{info?.name}</span>
            <span className="item-price">
              {price ? `Rs. ${price / 100}` : `Rating: ${rating ?? "N/A"}`}
            </span>
          </div>
        </li>
      );
    })}
  </ul>
</div>
  );
};

export default RestaurantMenu;

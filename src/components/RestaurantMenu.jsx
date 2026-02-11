import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.find((card) => card?.card?.card?.info)?.card
    ?.card?.info;

  if (!info) return <Shimmer />;

  const itemCards =
    resInfo?.cards
      ?.find((card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
          (c) => c?.card?.card?.itemCards,
        ),
      )
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c?.card?.card?.itemCards,
      )?.card?.card?.itemCards || [];

  const categories = resInfo?.cards
    ?.find((card) =>
      card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
        (c) => c?.card?.card?.itemCards,
      ),
    )
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  console.log("first", categories);

  if (!itemCards.length) return <Shimmer />;

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

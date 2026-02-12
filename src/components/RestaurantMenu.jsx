import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const dummy = "Dummy Data";
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

  // console.log("first", categories);

  if (!itemCards.length) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } = info;

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className=" w-full max-w-225 mx-auto p-8 font-sans bg-linear-to-br from-[#f5f7fa] to-[#c3cfe2] rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] min-h-screen text-center ">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-[3px] border-white/50">
          <h1 className="text-5xl font-extrabold uppercase tracking-[2px] mb-2 bg-linear-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-lg italic text-gray-500">{cuisines?.join(", ")}</p>
        </div>

        {/* Stats */}
        <ul className="flex justify-center gap-8 list-none p-6 mb-8 bg-white rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
          {/* Rating */}
          <li className="text-lg font-semibold text-gray-700 px-6 py-2 rounded-[10px] bg-linear-to-br from-[#ffeaa7] to-[#fdcb6e] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            <span className="text-xl font-bold">{avgRatingString}</span> ⭐
          </li>

          {/* Cost */}
          <li className="text-lg font-semibold text-white px-6 py-2 rounded-[10px] bg-linear-to-br from-[#a8e6cf] to-[#56ab91] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
            {costForTwoMessage}
          </li>
        </ul>

        {/* Menu Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center relative pb-2 mb-6">
          Menu
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-linear-to-r from-[#667eea] to-[#764ba2] rounded"></span>
        </h2>
        {/* {Accordion} */}
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex((prev) => (prev === index ? null : index))}
              dummy={dummy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

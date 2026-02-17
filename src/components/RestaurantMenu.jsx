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
    <div className="min-h-screen bg-[#f1f5f9] flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-[32px] shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-10 pb-8 border-b-2 border-gray-50">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-lg text-gray-500 font-medium italic">
            {cuisines?.join(" • ")}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm transition-transform hover:-translate-y-1">
            <span className="text-xl font-bold text-amber-700">{avgRatingString}</span>
            <span className="text-amber-500 text-lg">⭐</span>
          </div>

          <div className="px-6 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm transition-transform hover:-translate-y-1">
            <span className="text-lg font-bold text-emerald-700">{costForTwoMessage}</span>
          </div>
        </div>

        {/* Menu Section */}
        <div className="relative mb-8">
          <h2 className="text-3xl font-black text-gray-800 text-center">Menu</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Categories (Accordions) */}
        <div className="space-y-4">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title}              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

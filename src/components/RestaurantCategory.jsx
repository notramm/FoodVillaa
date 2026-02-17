import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

    return (
    <div className="w-full flex justify-center px-4">
      {/* Main Accordion Card */}
      <div className="w-full max-w-3xl my-3 bg-white border border-gray-100 rounded-3xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden">
        
        {/* Header Section */}
        <div
          className={`flex justify-between items-center p-6 cursor-pointer transition-colors duration-300 ${            showItems ? "bg-gray-50/50" : "bg-white hover:bg-gray-50"
          }`}
          onClick={handleClick}
        >
          <div className="flex items-center gap-3">
            <span className="font-black text-gray-800 text-xl tracking-tight">
              {data.title}
            </span>
            <span className="px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full uppercase tracking-wider">
              {data.itemCards.length} Items
            </span>
          </div>
          
          {/* Animated Chevron Icon */}
          <div className={`p-2 rounded-xl border border-gray-100 shadow-sm transition-all duration-500 ${
            showItems ? "rotate-180 bg-indigo-600 border-indigo-600 shadow-indigo-200" : "bg-white rotate-0"
          }`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-colors duration-300 ${showItems ? "text-white" : "text-gray-500"}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Body Section (ItemList) */}
        <div className={`transition-all duration-500 ease-in-out ${
          showItems ? "max-h-1250 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="border-t border-gray-50 px-4 pb-4 bg-white animate-fadeIn">
            <ItemList items={data.itemCards} dummy={dummy} />          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
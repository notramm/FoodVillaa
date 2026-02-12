import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-0">
      {/* Accordion Container */}
      <div className="w-full m-8 my-3 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300">
        
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          onClick={handleClick}
        >
          <span className=" p-7 m-5 font-bold text-gray-800 text-lg">
            {data.title} 
            <span className="ml-2 text-sm text-gray-400 font-medium">
              ({data.itemCards.length})
            </span>
          </span>
          
          <span className={`transition-transform duration-300 ${showItems ? "rotate-180" : "rotate-0"}`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-500" 
              fill="none"               viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>        {/* Accordion Body */}
        {showItems && (
          <div className="border-t border-gray-100 bg-white p-4 animate-fadeIn">
            <ItemList items={data.itemCards} dummy={dummy} />
          </div>
        )}
      </div>
    </div>
  );
};export default RestaurantCategory;
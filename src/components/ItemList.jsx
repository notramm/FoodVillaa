import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an Action
    dispatch(addItem(item));
  }
  return (
    <div className="flex flex-col px-2">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center gap-6 py-8 border-b border-gray-100 last:border-none transition-all hover:bg-gray-50/50 rounded-lg px-4"
        >
          {/* Left: Item Details */}
          <div className="flex-1 text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-800 leading-tight">
                {item.card.info.name}
              </h3>
              <p className="text-base font-semibold text-gray-700">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2 italic">
              {item.card.info.description}
            </p>
          </div>

          {/* Right: Image & Add Button */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-36 md:h-36">
              {item.card.info.imageId ? (
                <img
                  src={IMG_URL + item.card.info.imageId}
                  alt={item.card.info.name}                  className="w-full h-full object-cover rounded-2xl shadow-md border border-gray-100"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs text-center p-2">
                  No Image
                </div>
              )}
            </div>
            
            {/* Add Button - Positioned on top of image bottom */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 ">
              <button className="w-full py-2 bg-white text-green-600 font-extrabold text-sm cursor-pointer rounded-lg shadow-lg border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all active:scale-90 uppercase tracking-wider" 
              onClick={()=> handleAddItem(item)}>
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
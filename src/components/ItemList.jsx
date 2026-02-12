import { IMG_URL } from '../utils/contants';

const ItemList = ({ items }) => {
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start py-6 gap-4 text-left transition-all"
        >
          {/* Item Details */}
          <div className="w-9/12">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-base font-medium text-gray-700">                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
              {item.card.info.description}
            </p>
          </div>

          {/* Image & Add Button */}
          <div className="relative w-3/12 min-w-30">
            {item.card.info.imageId && (
              <img
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-24 object-cover rounded-xl shadow-sm"
              />
            )}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <button className="px-8 py-2 bg-white text-green-600 font-bold text-sm rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all active:scale-95 uppercase">
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
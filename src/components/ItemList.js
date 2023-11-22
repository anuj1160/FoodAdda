import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 bg-white border border-gray-300 rounded-lg shadow-md relative"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-48 h-48 rounded-md shadow-md"
                alt={item.card.info.name}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="absolute top-0 right-0 p-2 bg-black text-white rounded-lg shadow-md"
                  onClick={() => handleAddItems(item)}
                >
                  Add +
                </button>
              </div>
            </div>
            <div className="ml-4">
              <span className="font-bold text-lg text-gray-800">
                {item.card.info.name}
              </span>
              <span className="block text-gray-600 mt-1">
                ₹ -
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="mt-2 text-gray-700">{item.card.info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

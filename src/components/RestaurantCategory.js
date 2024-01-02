import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="my-4">
      <div className="w-10/12 mx-auto bg-gray-100 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">&#9660;</span>
        </div>

        {showItems && <ItemList items={data.itemCards} btn="Add +" />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

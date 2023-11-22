import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info;

  // Calculate the desired width and height
  const imageWidth = 150; // Specify your desired width
  const imageHeight = 150; // Specify your desired height

  return (
    <div className="res-card m-4 p-4 w-150 bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-700">Rating: {avgRating}</h4>
      <h4 className="text-gray-700">Cost for Two: {costForTwo}</h4>
      <h4 className="text-gray-700">Delivery Time: {sla.deliveryTime}</h4>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div>
        <label className="text-green-500 font-bold">
          {resData.info.aggregatedDiscountInfoV3.header !== "ITEMS"
            ? resData.info.aggregatedDiscountInfoV3.header
            : "NO OFFER"}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./ShimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const RestaurantCardPromoted = withDiscountLabel(RestaurantCard);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-2xl text-red-600">Looks like you are offline</h1>
    );
  }

  if (listOfRestaurant == null || listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center m-4 p-4">
        <div className="flex items-center">
          <input
            type="text"
            className="border border-solid border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            onClick={() => {
              const findRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRestaurant(findRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.1
              );
              setFilterRestaurant(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filterRestaurant.map((restaurant) => (
          <Link
            className="m-2 p-2 transition duration-300 ease-in-out transform hover:scale-105"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md w-64 h-96">
              {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

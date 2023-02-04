import { restaurantList } from "../config";
import ResturanatCard from "./ResturanatCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// What is state
// What is React Hooks? - functions
// What is useState

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((resturant) =>
  resturant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  //const searchTxt = "KFC";

  // searchText is a local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState(""); // To create state variable

  // empty dependency array => once after render
  // dependency array [searchText]=> once after initial render + everytime re-render(my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  // Conditional Rendering
  // if restraunt is empty => Shimmer UI
  // if restraunt has data => actual data UI

  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0)

  
    return <h1>No Restraurant match your filter!!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);

            // update the state
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="returant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <ResturanatCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

import { restaurantList } from "../config";
import ResturanatCard from "./ResturanatCard";
import { useState } from "react";

// What is state
// What is React Hooks? - functions
// What is useState

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((resarunt) =>
    resarunt.data.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  //const searchTxt = "KFC";

  // searchText is a local state variable

  const [restaurants, setRestaurants] = useState(restaurantList);

  const [searchInput, setSearchInput] = useState(""); // To create state variable
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchInput, restaurants);

            // update the state
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="returant-list">
        {restaurants.map((restaurant) => {
          return (
            <ResturanatCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

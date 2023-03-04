import { restaurantList } from "../config";
import ResturanatCard from "./ResturanatCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((resturant) =>
  resturant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); 
  
  useEffect(() => {
    getRestaurants();
  }, []);
  
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0330488&lng=73.0296625&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restraurant match your filter!!</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <div className="container">
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
      </div>
      <div className="returant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
           <Link to ={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> <ResturanatCard {...restaurant.data}  /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

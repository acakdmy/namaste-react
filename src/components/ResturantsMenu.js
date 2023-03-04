import { useEffect,useState } from "react";
import {useParams} from "react-router-dom"
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const ResturantsMenu = ()=>{

    // how to read a dynamic URL params
    const {resId} = useParams();
    //const {id} = params;
    // console.log(resId)
    const [restaurant,setRestaurant] = useState(null)

    useEffect(()=>{
getRestaurantInfo();

    },[]);

    async function getRestaurantInfo(){
        
    const data =await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.0330488&lng=73.0296625&menuId="+resId);
    const json = await data.json();
    console.log(json)
    setRestaurant(json.data)
    }
    
    return (!restaurant)?<Shimmer/>:(
        <div className="menu">
            <div>
            <h1>Resturant id:{resId}</h1>
            <h2>{restaurant?.name} </h2>
            <img src = {IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.locality}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            <div>
               <h1>Menu</h1>
               <ul>
                {Object.values(restaurant.menu.items).map((item)=>(<li key = {item.id}>{item.name}</li>))}
               </ul>
            </div>
        </div>
    )
}

export default ResturantsMenu;
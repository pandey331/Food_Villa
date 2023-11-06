import { useState,useEffect } from "react";
import { SWIGGY_RESTAURANT_CDN_URL } from "../config";

const useRestrauntList =()=>{
    //store an array of restaunt data 
    const[restaurants,setRestaurants]=useState([]);
    //stores copy of data 
    const[actualData,setActualData] = useState([]);
    const[loading,setLoading] = useState(true);


    async function getRestaurant(){
        try{
            const data=await fetch(SWIGGY_RESTAURANT_CDN_URL);
            const json = await data.json();
            setRestaurants(
                json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants  
            )
            setActualData(
                json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )
            //The loading state is set to false to indicate that the data has finished loading.
            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getRestaurant();
    },[]);

    return [restaurants,actualData,setRestaurants,loading];
};

export default useRestrauntList;
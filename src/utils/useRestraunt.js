import { useParams } from "react-router-dom";

import { useState,useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../config";

const useRestraunt =()=>{
    //useparam()= use to capture synamic parameter in URL Like ID
    const {resId} = useParams();
    // res store restraunt information 
    const[res,setRes] = useState({});
    // indicate whether the data has been loaded from the API.
    const[isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>
    {
        getRestaurantInfo();

    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(RESTAURANT_MENU_URL + resId);
        const json = await data.json();
        console.log("Menu data:", json);
        console.log("Menu Response ", json?.data.cards);
        setRes(json?.data?.cards);
        setIsLoaded(true);
    }
    return [res,isLoaded];

}
export default useRestraunt;
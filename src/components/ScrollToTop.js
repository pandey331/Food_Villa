import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop =() =>{
    //get the current location
    const{pathname} = useLocation();

    //effect will run whenevr the pathname changes
    useEffect (()=>{
        window.scrollTo(0,0);
    },[pathname]);

    return null;
    //The return null; statement is used because this component doesn't render 
    //any visible content. Its primary purpose is to handle scrolling behavior,
     //so it doesn't need to return any JSX elements.
};

export default ScrollToTop;

//ScrollToTop that is designed to scroll to the top of the page whenever the location
// (pathname) changes using the useLocation and useEffect hooks from the React Router library.
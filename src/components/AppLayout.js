import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from  "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";
import ScrollToTop from "./ScrollToTop";



/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
                -login/logout
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/






const AppLayout =()=>{
    const[user,setUser] = useState({
        name:"Anjali Pandey",
        email:"anjali123@gmail.com",
    });

    return(
        <>
        <ScrollToTop/>
        <Provider store ={store}>
            <UserContext.Provider value={{user:user,setUser:setUser}}>

                {/* //AppLayout component to rener Header, Outlet(it contain children componenet like body , About,RestrauntMenu etc)
                 and footer component. */}
                <Header/>
                <Outlet/>
                <Footer/>

            </UserContext.Provider>
        </Provider>
        </>
    );
};
export default AppLayout;
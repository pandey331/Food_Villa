import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Body from "../components/Body";
import Profile from "../components/ProfileClassComponent";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import RestrauntMenu from "../components/RestrauntMenu";
import AppLayout from "../components/AppLayout";
import Shimmer from "../components/Shimmer";
import InstaMart from "../components/InstaMart";

const About = lazy(() => import("../components/About"));

const useRoute = () => {
  //call createBrowseRouter for routing different pages
  const appRoute = createBrowserRouter([
    {
      path: "/", //show path for routing
      element: <AppLayout />,  //show component for particular path 
      errorElement: <Error />,  //show error component for path is different
      children: [
        //show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Shimmer />}>
              <About />
            </Suspense>
          ),
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restraunt/:resId",
          element: <RestrauntMenu />,
        },
        {
          path: "/instamart",
          element: <InstaMart />,
        },
      ],
    },
  ]);
  return appRoute;
};

export default useRoute;

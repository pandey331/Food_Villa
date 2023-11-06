import { useState,useEffect } from "react";

const useOnline =()=>{

    const[isOnline, setIsonline] = useState(true);

    useEffect (()=>{
        window.addEventListener("online", ()=>{
        setIsonline(true)
        });
        window.addEventListener("offline", ()=>{
            setIsonline(false);
        });
        return()=>{
            window.removeEventListener("online",()=>{
                setIsonline(true)
            })
            window.removeEventListener("offline", ()=>{
                setIsonline(false);
            });
        }
      
    },[]);
    return isOnline;

};
export default useOnline;
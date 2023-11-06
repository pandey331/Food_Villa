import { createContext } from "react";

const UserContext =createContext({
    user:{
        name:"Dummy user",
        email:"dummyemail@gmail.com",
    },
});

UserContext.displayName="UserContext";

export default UserContext;

//Context in React is a way to pass data down the component tree
// without having to explicitly pass props through each level of
// your application. It can be used to provide data or state to multiple 
//components without having to pass it explicitly through props.
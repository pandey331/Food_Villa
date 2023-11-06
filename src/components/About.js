import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClassComponent";
import { Component } from "react";



// const About = () =>{
//     return (
//         <>
//            <p>About Page</p>
//            <ProfileFunctionComponent name ={"Robin from function component "}/>
//            <Profile name ={"Ron fro  class component"}/>
//         </>
//     );
// };

//classBase Component

   class About extends Component{
        constructor(props){
            super(props);
            //console.log("Parent constructor"); 
        }
        componentDidMount(){
            //Best place to make api call because it runs after
            //first render to load the data
            //console.log("Parent componentDidMount")
        }
        render() {
            return(
                <>
                <h1>About Me </h1>
                <Profile name ={"First Child"} />
                </>
            )
        }
    };
     




export default About;
import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"",
                location:"",
            },
        };
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/pandey331");
        const json = await data.json();
        //consol.log(json);

        this.setState({
            userInfo:json,
        
        });
        // this.timer = setInterval(()=>{
        //     console.log("componentDidMount");
        // },1000);
    }
    componentDidUpdate(){
        //console.log("childe componentDidUpdate" + this.props.name);
    }
    componentWillUnmount(){
        //clearInterval(this.timer);
        console.log("componentwillunmount");
    }
    render(){
        // console.log(count);
    const { name, location, avatar_url } = this.state?.userInfo;
    return (
      <div>
        {/* {console.log("Child render " + this.props.name)} */}
        {/* <h1>Profile Class Component</h1> */}
        <h2>Name : {name}</h2>
        {/* <p>Location : {!location ? "Not Provided" : location}</p> */}
        <img src={avatar_url} />

        {/* <button
          onClick={() => {
            this.setState((counter) => ({
              count: counter.count + 1,
            }));
          }}
        >
          Count
        </button> */}
      </div>
    )
    }
}

export default Profile;
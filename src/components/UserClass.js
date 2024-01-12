import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"dummy",
                location:"dummy",
            }
        }
        // console.log("constructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/gourav094");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo:json,
        })
        // console.log("component did Mount");
        debugger;
    }
    componentDidUpdate(){
        // console.log("component did update");
    }
    render(){
        const {name,location,avatar_url,id} = this.state.userInfo;
        // console.log("render");

        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h3>id :{id}</h3>
                <h3>Name : {name}</h3>
                <h3>Contact : Gouravgarg094</h3>
                <h3>location : {location}</h3>
            </div>
        )
    }
}
export default UserClass;
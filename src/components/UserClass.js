import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2: 2,
        }
        // console.log(this.props.name + "constructor");
    }
    componentDidMount(){
        // console.log(this.props.name + "mount component");
    }
    render(){
        const {name,location} = this.props;
        const {count} = this.state;
        // console.log(name + "render");
        return(
            <div className="user-card">
                <h3>count:{count}</h3>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count + 1,
                    })
                    console.log(this);
                }}
                >add count</button>
                <h3>Name : {name}</h3>
                <h3>Contact : Gouravgarg094</h3>
                <h3>location : {location}</h3>
            </div>
        )
    }
}
export default UserClass;
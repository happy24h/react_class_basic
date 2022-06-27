import React from "react";
import Color from "../HOC/Color"
import logo from "../../assets/images/logo.jpg"

class Home extends React.Component {

    handleNavigateTodo = () => {
        this.props.navigate('/todo');
    }
    
    render() {
        console.log('>>> check props Home.js: ', this.props);
        return (
            <div>
                <h3>Hello world from Homepage </h3>
                <img src={logo} width="135" height="150" alt="logo"/>
            </div>
        )
    }
}

export default Color(Home);


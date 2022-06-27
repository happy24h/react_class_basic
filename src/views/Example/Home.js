import React from "react";
import {useNavigate} from 'react-router-dom';
import Color from "../HOC/Color"

export const withRouter = WrappedComponent => props => {
    return (<WrappedComponent {...props} navigate={useNavigate()}/>);
};

class Home extends React.Component {

    handleNavigateTodo = () => {
        this.props.navigate('/todo');
    }
    
    render() {
        console.log('>>> check props Home.js: ', this.props);
        return (
            <div>
                <h3>Hello world from Homepage </h3>
                <button onClick={() => this.handleNavigateTodo()}>Todo</button>
            </div>
        )
    }
}

export default Color(Home);


import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";



function withParams(Component) {
    return props => <Component {...props}  navigate={useNavigate()} params={useParams()} />;
  }
  

class DetailUser extends React.Component {
    state = {
        user: []
    }

    async componentDidMount() {
        if(this.props.params) {
            let id = this.props.params.id;

            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBackButton = () => {
        this.props.navigate("/user")
        
    }
    render() {
        console.log('>>> check props detailUser.js :', this.props)
        console.log('>>> check state detailUser.js :', this.state)

        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0; 
        return(
            <>
            
                <div>
                    Hello world from detail user id {this.props.params.id}
                </div>
                { isEmptyObj === false && 
                    <div>
                        <div>User's Name: {user.first_name} - {user.last_name}</div>
                        <div>User's Email: {user.email}</div>
                        <img src={user.avatar} alt="logo"/>
                    </div>
                }
                <button onClick={() => this.handleBackButton()}>Back</button>

            </>
        )
    }
}

export default withParams(DetailUser);
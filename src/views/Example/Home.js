import React from "react";
import Color from "../HOC/Color"
import logo from "../../assets/images/logo.jpg"
import {connect} from "react-redux"

class Home extends React.Component {

   handleDeleteUser = (user) => {
    console.log('>>> check uer delete: ', user)
    this.props.deleteUserRedux(user)

}
handleCreateUser = (user) => {
    this.props.addUserRedux()
}


    render() {
        console.log('>>> check props Home.js: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return (
            <div>
                <h3>Hello world from Homepage </h3>
                <img src={logo} width="135" height="150" alt="logo"/>
                <div>
                    {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                &nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add New</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));


import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }
    
    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("check state: " ,this.state)
    }
   
    render() {
        // console.log(">>>> re-render: ", this.state )
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(e) => this.handleChangeFirstName(e)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text"
                        value={this.state.lastName}
                        onChange={(e) => this.handleChangeLastName(e)}
                    />
                    <br/><br/>
                    <input 
                        type="submit" 
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form> 
                <ChildComponent name={'child one'}/>
                <ChildComponent name={'child two'}/>
                <ChildComponent name={'child three'}/>
            </>
        )
    }
}

export default MyComponent;
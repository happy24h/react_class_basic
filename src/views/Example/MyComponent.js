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
        console.log(">>> check props parents: ", this.props);
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
                <ChildComponent 
                name={'Việt Anh'}
                address={"Hà Nội"}
                age={"20"}

                />
                {/* props: property */}
            </>
        )
    }
}

export default MyComponent;
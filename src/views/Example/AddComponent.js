import React from "react";
class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault()

        if(!this.state.title || !this.state.salary) {
            alert("Missing required params")
            return;
        }

        console.log(">>>> check input: " ,this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
            salary: this.state.salary

        })

        this.setState({
            title: "",
            salary: "",
        })
    }
   

    render() {
        return (
            <form >
                <label htmlFor="fname">Job's title:</label><br/>
                <input 
                    type="text" 
                    value={this.state.title}
                    onChange={(e) => this.handleChangeTitle(e)}
                />
                <br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input 
                    type="text"
                    value={this.state.salary}
                    onChange={(e) => this.handleChangeSalary(e)}
                />
                <br/><br/>
                <input 
                    type="submit" 
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form> 
        )

    }
}

export default AddComponent;
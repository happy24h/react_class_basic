import React from "react";
class AddComponent extends React.Component {

    state = {
        titleJob: "",
        salary: "",
    }

    handleChangeTitleJob = (e) => {
        this.setState({
            titleJob: e.target.value
        })
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>>> check input: " ,this.state)
    }
   

    render() {
        return (
            <form >
                <label htmlFor="fname">Job's title:</label><br/>
                <input 
                    type="text" 
                    value={this.state.titleJob}
                    onChange={(e) => this.handleChangeTitleJob(e)}
                /><br/>
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
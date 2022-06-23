import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: "1", salary: "500", title: "developer"},
            {id: "2", salary: "400", title: "testers"},
            {id: "3", salary: "1000", title: "managers"}
        ]
    }

    addNewJob = (job) => {

        console.log('check job from parent:', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

        this.setState({
            title: "",
            salary: '',
        })
    }
    
    render() {
        console.log(">>> check state --------: ", this.state);
        return (
            <>
            <AddComponent
            addNewJob = {this.addNewJob}
            />
                <ChildComponent 
                 
                    jobs = {this.state.arrJobs}
                />
                {/* props: property */}
            </>
        )
    }
}

export default MyComponent;
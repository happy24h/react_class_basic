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

        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        // this.setState({
        //     arrJobs: currentJobs
        // })

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

        this.setState({
            title: "",
            salary: '',
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
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
                    deleteAJob = {this.deleteAJob}
                />
                {/* props: property */}
            </>
        )
    }
}

export default MyComponent;
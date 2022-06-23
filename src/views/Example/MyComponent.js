import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: "1", salary: "500", position: "developer"},
            {id: "2", salary: "400", position: "testers"},
            {id: "3", salary: "1000", position: "managers"}
        ]
    }
    
    render() {
        console.log(">>> check props parents: ", this.props);
        return (
            <>
            <AddComponent/>
                <ChildComponent 
                 
                    jobs = {this.state.arrJobs}
                />
                {/* props: property */}
            </>
        )
    }
}

export default MyComponent;
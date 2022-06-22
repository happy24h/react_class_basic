import React from "react";

class ChildComponent extends React.Component {

    // re-render
    render() {
        console.log(">>> check props child: ", this.props)

        // let jobs = this.props.jobs;
        let {jobs} = this.props;

        return (
            <>
                <div className="jobs-list">
                    {jobs.map((item, index) => (
                        <div key = {index}>{item.position} - {item.salary}</div>
                    ))}
                </div> 
            </>
        )
    }
}

export default ChildComponent;
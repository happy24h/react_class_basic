import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    // re-render
    render() {
        // console.log(">>> check props child: ", this.props)

        // let jobs = this.props.jobs;
        let { jobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? "showJobs === true" : "showJobs = false";

        console.log(">>> check ", check)

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div className="jobs-list">
                            {jobs.map((item, index) => (
                                <div key = {index}>{item.position} - {item.salary}</div>
                            ))}
                        </div> 
                        <div>
                            <button onClick={() => this.handleShowHide()}>Show hide</button>
                        </div>
                    </> 
                }
            </>
        )
    }
}

export default ChildComponent;
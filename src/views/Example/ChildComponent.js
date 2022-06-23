import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log("check delete:" ,job);
        this.props.deleteAJob(job)
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
                {showJobs === true ?
                    <div>
                        <button 
                            className="btn-show" 
                            onClick={() => this.handleShowHide()}
                        >
                            Show
                        </button>
                    </div>
                :
                    <>
                        <div className="jobs-list">
                            {jobs.map((item, index) => (
                                <div key = {index}>{item.title} - {item.salary} 
                                <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span> </div>
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
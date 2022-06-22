import React from "react";

class ChildComponent extends React.Component {

   
    // re-render
    render() {
        // console.log(">>>> re-render: ", this.state )
        return (
            <>
                <div>child component: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;
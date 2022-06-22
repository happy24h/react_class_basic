import React from "react";

class ChildComponent extends React.Component {

    // re-render
    render() {
        console.log(">>> check props child: ", this.props)

        // let name = this.props.name;
        // let address = this.props.address;
        // let age = this.props.age;

        let {name, address, age} = this.props;
        
        return (
            <>
                {/* <div>component child: {this.props.name} - {this.props.address} - {this.props.age}</div> */}

                <div>component child: {name} - {address} - {age}</div>
            </>
        )
    }
}

export default ChildComponent;
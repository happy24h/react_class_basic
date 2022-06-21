import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Việt Anh",
        address: "Hà Nội"
    }

    handleInput = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleClick = () => {
        alert("Click me!")
    }
   
    render() {
        return (
            <div>
                <input
                value={this.state.name}
                onChange={(e) => {this.setState({name: e.target.value})}}
                /> 
                <input
                value= {this.state.address}
                onChange={(e) => this.handleInput(e)} 
                /> 
                <div>
                    <p>
                      name: {this.state.name}
                    </p>
                    <p>
                        address: {this.state.address}
                    </p>
                </div>

                <div>
                    <button onClick={() => {this.handleClick()}}>Click me!</button>
                </div>
            </div>
        )
    }
}

export default MyComponent;
import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title:  ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })  
    }

    handleAddTodo = () => {

        if(!this.state.title) {
            //> undefined || null || empty
            toast.warning("missing title")
            return;
        }

        let todo = 
            {
                id: Math.floor(Math.random() * 10000),
                title: this.state.title
            }

            this.setState({
             title: ""
            })

        this.props.addNewTodo(todo)
    }
    
    render() {
        let { title } = this.state;
        return (
            <div>
                 <input 
                    type="text" 
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                 />
                <button 
                    type="button"
                    className="add"
                    onClick={() => this.handleAddTodo()}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;
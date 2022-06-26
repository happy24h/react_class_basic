import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state= {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making video'},
            {id: 'todo3', title: 'Fixing bugs'},
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);

        this.setState({
            listTodos: [...this.state.listTodos, todo],
            // listTodos: currentListTodo
        })

        toast.success("Chúc bạn một ngày mới vui vẻ")

    }

    handleDeleteTodo = (todo) => {
        let currentListTodo = this.state.listTodos
        currentListTodo = currentListTodo.filter((item) => item.id !== todo.id)
        this.setState({
            listTodos: currentListTodo
        })
        toast.success("delete success")
    }

    handleEditTodo = (todo) => {
        let {editTodo , listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log("isEmptyObj:", isEmptyObj)

        // save
        if(isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("save success")
            return;
        }

        // edit
        this.setState({
            editTodo: todo
        })       
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObj);
        return (

            <>
                <p>TODO APP</p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo= {this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 && 
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? 
                                    <span>{index + 1} - {item.title} </span>
                                    :
                                    <>
                                        {
                                            editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - 
                                                <input 
                                                    value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                />
                                            </span>
                                            : <span>{index + 1} - {item.title} </span>
                                        }
                                    </>
                                    }
                                    <button 
                                        className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                        "Save" :"Edit"
                                        }
                                    </button>
                                    <button 
                                        className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >
                                        Delete</button>
                                </div>
                            )
                        })}
                    </div>
                
                </div>
            </>
        )
    }

}

export default ListTodo;

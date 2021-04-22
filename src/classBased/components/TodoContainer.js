import React from 'react';
import TodoList from "./TodoList";
import Header from "./Header";
import InputToDo from "./InputToDo";
import {v4 as uuid4} from "uuid";

function Todo() {
    this.id = uuid4();
    this.title = "";
    this.completed = false;
}

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuid4(),
                title: "First one",
                completed: false
            },
            {
                id: uuid4(),
                title: "Second one",
                completed: false
            },
            {
                id: uuid4(),
                title: "Third one",
                completed: true
            }
        ]
    }
    handleChange = (id) => {
        this.setState(prevState => {
            let state = {};
            state = Object.assign(state, prevState);
            state.todos = state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            return state;
        })
    }

    delToDo = id => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }));
    }

    addTodo=(text)=>{
        let toDo = new Todo();
        toDo.title = text;
        this.setState(prevState=>({
            todos: prevState.todos.concat(toDo)
        }))
    }

    setUpdateItem = (updateTitle, id)=>{
        this.setState(prevState=>{
            return {
                todos: prevState.todos.map(todo =>{
                    if (todo.id === id) {
                        return {
                            ...todo,
                            title: updateTitle
                        }
                    }
                    return todo;
                }),
            }
        })
    }


    componentDidMount() {
        let localTodos = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(localTodos);
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos,
            })
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            window.localStorage.setItem("todos",JSON.stringify(this.state.todos))
        }
    }



    render() {

        return <div className={"container"}>
            <div className={"inner"}>
                <Header/>
                <InputToDo addToDoProps={this.addTodo} />
                <TodoList
                    todos={this.state.todos} handleChangeProps={this.handleChange}
                    deleteToDoProps={this.delToDo}
                    setUpdateProp={this.setUpdateItem}
                />
            </div>
        </div>;
    }
}

export default TodoContainer;
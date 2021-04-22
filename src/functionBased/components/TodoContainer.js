import React, {useEffect, useState} from 'react';
import {v4 as uuid4} from "uuid";
import Header from "./Header";
import InputToDo from "./InputToDo";
import TodoList from "./TodoList";
import {Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import NavBar from "./NavBar";
import SinglePage from "../pages/SinglePage";

function Todo() {
    this.id = uuid4();
    this.title = "";
    this.completed = false;
}

export default function TodoContainer() {
    const initialTodos = [
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
    ];
    const [todos, setTodos] = useState(initialTodos);

    // noinspection DuplicatedCode
    const handleChange = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        })

    }

    const delToDo = id => {
        setTodos(prevTodo => {
            return prevTodo.filter(todo => todo.id !== id);
        })
    }

    const addTodo = (text) => {
        let toDo = new Todo();
        toDo.title = text;
        setTodos(prevTodos => prevTodos.concat(toDo));
    }

    const setUpdateItem = (updateTitle, id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    todo.title = updateTitle;
                }
                return todo;
            });
        })
    }
    useEffect(() => {
        const jsonString = localStorage.getItem("todos");
        if (jsonString) {
            setTodos(JSON.parse(jsonString));
        }
    }, [setTodos]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    return (
        <React.Fragment>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <div className={"container"}>
                        <div className={"inner"}>
                            <Header/>
                            <InputToDo addToDoProps={addTodo}/>
                            <TodoList
                                todos={todos} handleChangeProps={handleChange}
                                deleteToDoProps={delToDo}
                                setUpdateProp={setUpdateItem}
                            />
                        </div>
                    </div>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route path={"/about/:param"}>
                    <SinglePage/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </React.Fragment>);

}
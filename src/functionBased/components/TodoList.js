import React from 'react';
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    return <ul>
        {
            props.todos.map(todo => {
                return <TodoItem
                    key={todo.id} todo={todo} handleChangeProps={props.handleChangeProps}
                    delToDoProps={props.deleteToDoProps} setUpdateProp={props.setUpdateProp}
                />
            })
        }
    </ul>
}
import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    render() {
        return <ul>
            {
                this.props.todos.map(todo => {
                    return <TodoItem
                        key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps}
                        delToDoProps={this.props.deleteToDoProps} setUpdateProp={this.props.setUpdateProp}
                    />
                })
            }
        </ul>
    }
}

export default TodoList;
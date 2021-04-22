import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
    state = {
        editing: false,
    }
    handleEditing = () => {
        this.setState({
            editing: true,
        })
        console.log("Edit Mode Activated");
    }

    setUpdate = (updateTitle,id) => {
        this.props.setUpdateProp(updateTitle, id);
    }
    handleUpdatedDone = (event) => {
        if (event.key.toLowerCase() === 'enter') {
            this.setState({
                editing: false
            })
        }
    }


    componentWillUnmount() {
        console.log("Item Cleaning");
    }

    render() {
        const {id, completed, title} = this.props.todo;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        let viewMode = {};
        let editMode = {};

        if (this.state.editing) {
            viewMode.display = "none";
        } else {
            editMode.display = "none";
        }
        return <li className={styles.item}>
            <div onDoubleClick={this.handleEditing} style={viewMode}><input
                type={"checkbox"} checked={completed}
                className={styles.checkbox}
                onChange={() => this.props.handleChangeProps(id)}/>
                <button onClick={() => this.props.delToDoProps(id)}>delete</button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input
                type="text" className={styles.textInput} style={editMode}
                value={title}
                onChange={e=>this.setUpdate(e.target.value,id)}
                onKeyDown={this.handleUpdatedDone}
            />
        </li>
    }


}

export default TodoItem;
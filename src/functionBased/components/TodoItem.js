import React,{useState,useEffect} from 'react';
import styles from './TodoItem.module.css';
import {FaTrash} from "react-icons/fa";


export default function TodoItem(props) {
    const [editing, setEditing] = useState(false);
    useEffect(()=>{
        return ()=> console.log("Cleaning Up");
    },[])
    const handleEditing = () => {
        setEditing(true);
        console.log("Edit Mode Activated");
    };

    const setUpdate = (updateTitle,id) => {
        props.setUpdateProp(updateTitle, id);
    };

    const handleUpdatedDone = (event) => {
        if (event.key.toLowerCase() === 'enter') {
            setEditing(false);
        }
    };

    const {id, completed, title} = props.todo;
    // noinspection DuplicatedCode
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    // noinspection DuplicatedCode
    return <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}><input
            type={"checkbox"} checked={completed}
            className={styles.checkbox}
            onChange={() => props.handleChangeProps(id)}/>
            <button onClick={() => props.delToDoProps(id)} style={{ color: "orangered", fontSize: "16px" }} ><FaTrash/></button>
            <span style={completed ? completedStyle : null}>
                    {title}
                </span>
        </div>
        <input
            type="text" className={styles.textInput} style={editMode}
            value={title}
            onChange={e=>setUpdate(e.target.value,id)}
            onKeyDown={handleUpdatedDone}
        />
    </li>
};
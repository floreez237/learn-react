import React,{useState} from 'react';
import {FaPlusCircle} from "react-icons/fa";

export default function InputToDo(props) {
    const [title, setTitle] = useState("");
    const changeText = (event)=>{
        setTitle(event.target.value);
    };
    const handleSubmit = event=>{
        event.preventDefault();
        if (title.trim()) {
            props.addToDoProps(title);
            setTitle("");
        }else {
            alert("Write an Item")
        }

    }
    return (
        <form onSubmit={handleSubmit} className={"form-container"}>
            <input name={"title"}  type={"text"} placeholder={"Add Todo...."} value={title} onChange={changeText}/>
            <button className={"input-submit"}><FaPlusCircle/></button>
        </form>
    );
}
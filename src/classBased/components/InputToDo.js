import React from 'react';
class InputToDo extends React.Component{
    state={
        title:""
    }
    changeText = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = event=>{
        event.preventDefault();
        if (this.state.title.trim()) {
            this.props.addToDoProps(this.state.title);
            this.setState({
                title:"",
            })
        }else {
            alert("Write an Item")
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={"form-container"}>
                <input name={"title"}  type={"text"} placeholder={"Add Todo...."} value={this.state.title} onChange={this.changeText}/>
                <button className={"input-submit"}>Submit</button>
            </form>
        );
    }
}

export default InputToDo;
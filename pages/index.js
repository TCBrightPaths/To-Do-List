import { render } from "react-dom";
import React from "react";

let testData = {
    num: 0
}
class Form extends React.Component {
    state = {taskItem: ""}
    submitHandler = (event) => {
        event.preventDefault()
    
        this.props.onSubmit(this.state.taskItem);
    }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    border: 'solid',
                    fontSize: 18,
                    fontFamily: 'Courier'
                }}
                type="text" 
                value={this.state.taskItem}
                onChange={event => this.setState({taskItem: event.target.value})}
                placeholder="Add Task" />
                <Addbtn />
            </form>
        )
    }
}

const List = (props) => {
    return (
        <li>

        </li>
    )
}

const TaskList = (props) => {
    return (
        <div>
            <ul style={{
                fontSize: 24,
                width: '100%',
                fontFamily: 'Courier'
            }}>
                <List />
            </ul>
        </div>
    )
}

const Addbtn =()=> {
    return(
        <button 
            style={{
                border: 'none',
                borderRadius: 10,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 15, 
                paddingLeft: 15,
                fontWeight: 'bold',
                background: 'teal',
                color: 'white',
                marginLeft: 20,
                verticalAlign: 'middle',
                fontFamily: 'Courier'
            }}>
                Add
            </button>
    );
}

class IndexPage extends React.Component {
    state = {
        tasks: taskdata
    }

    addNewTask = (listItem) => {
        console.log(listItem)
    }

    render() {
        return (
                
            <main>
                <h1 className="title" style={{fontFamily: 'Courier'}}>To-Do List</h1>
                <section className="addList">
                    <Form onSubmit={this.addNewTask} />
                </section>
                <TaskList tasks={this.state.tasks}/>
                <aside className="msg" id="message"></aside>
            </main>
    
      
        );
    }
}

export default IndexPage;
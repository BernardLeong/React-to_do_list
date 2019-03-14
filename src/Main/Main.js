import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AllTodoTables from '../All_todos_table/AllTodosTable';
import Form from '../CRUD/CreateForm';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        fetch(`/to_dos.json`)
            .then((response) => {return response.json()})
            .then((data) => {
                this.setState({ 
                    todos: data
                }) 
            });
    }

    render(){
        const todos = this.state.todos

        const todos_map = this.state.todos.map((todo)=>{
            return(
                <div key={todo.id}>
                <div>{todo.to_dos}</div>
                <div>{todo.comments}</div>
                </div>
            )
        })
        return(
            <div>
            <AllTodoTables todo={todos}/>
            <Form />
            </div>
        );
    }
}

export default Main;
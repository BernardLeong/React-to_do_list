import React from 'react';
// import ReactDOM from 'react-dom';
import AllTodoTables from '../All_todos_table/AllTodosTable';
import Form from '../CRUD/CreateForm';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            test: []
        }
        this.addNewTodo=this.addNewTodo.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.addNewTodo=this.addNewTodo.bind(this);
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

    handleFormSubmit(todos, comments){
        fetch(`/to_dos.json?todo="hi"`)
            .then((response) => {return response.json()})
            .then((data) => {
                this.setState({ 
                    todos: data
                }) 
            });

        
      }
    
      addNewTodo(todo){
        this.setState({
          todos: this.state.todos.concat(todo)
        })
      }

    render(){
        const todos = this.state.todos
        return(
            <div>
            <AllTodoTables todo={todos}/>
            <Form handleSubmit={this.handleFormSubmit} todos={this.addNewTodo} />
            </div>
        );
    }
}

export default Main;
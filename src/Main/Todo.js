import React from 'react';
import ReactDOM from 'react-dom';

class Todos extends React.Component{
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

        const todos = this.state.todos.map((todo)=>{
            return(
                <div key={todo.id}>
                <div>{todo.to_dos}</div>
                <div>{todo.comments}</div>
                </div>
            )
        })
        return(
            <div>{todos}</div>
        );
    }
}

export default Todos;
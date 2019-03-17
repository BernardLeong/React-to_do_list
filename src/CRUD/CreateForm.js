import React from 'react';
import FormShow from './FormShow';
import AddButton from '../All_todos_table/AddButton';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addForm: false,
            postValue: '',
            commentsValue: ''
        }
        this.showForm = this.showForm.bind(this);
        this.handlePostOnChange = this.handlePostOnChange.bind(this);
        this.handleComOnChange = this.handleComOnChange.bind(this);
        this.lame=this.lame.bind(this);
    }

    showForm(){
        this.setState({
            addForm: true
        })
    }

    handlePostOnChange(event){
        this.setState({
            postValue: event.target.value
        })
    }

    handleComOnChange(event){
        this.setState({
            commentsValue: event.target.value
        })
    }
    lame(){
        alert ("Hi")
    }

    render(){
        if (this.state.addForm){
            return(
                <div>{console.log(this.props.handleSubmit)}
                    <FormShow lame={this.lame} handleSubmit={this.props.handleSubmit} onPostChange={this.handlePostOnChange} onComChange={this.handleComOnChange} pValue={this.state.postValue} cValue={this.state.commentsValue}/>
                </div>
            )
        }else{
            return(
                <div>
                <AddButton showForm={this.showForm}/>
                </div>
            );
        } 
    }
}

export default Form;
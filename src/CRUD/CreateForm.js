import React, { Component } from 'react';
import FormShow from './FormShow';
import AddButton from '../All_todos_table/AddButton';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addForm: false,
            postValue: '',
            commentsValue: '',
            postSubmitValue: '',
            comSubmitValue: ''
        }
        this.showForm = this.showForm.bind(this);
        this.handlePostOnChange = this.handlePostOnChange.bind(this);
        this.handleComOnChange = this.handleComOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
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

    render(){
        if (this.state.addForm){
            return(
                <FormShow onSubmit={this.handleSubmit} onPostChange={this.handlePostOnChange} onComChange={this.handleComOnChange} pValue={this.state.postValue} cValue={this.state.commentsValue}/>
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
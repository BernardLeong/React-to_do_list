import React from 'react';
// import ReactDOM from 'react-dom';

const FormShow = (props) => {
    let formFields = {}
    return(
        <div>
            <form onSubmit={ (e) => { props.handleSubmit(formFields.posts.value, formFields.comments.value); e.target.reset();}
}>
            <input ref={input => formFields.posts = input} placeholder="Posts"></input>
            <input ref={input => formFields.comments = input} placeholder="Comments"></input>
            <button>Submit</button>
            </form> 
        </div>
    )
}

export default FormShow;
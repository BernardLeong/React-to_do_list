import React from 'react';
// import ReactDOM from 'react-dom';

const AddButton = (props) => {
    return(
        <div>
            <button onClick={props.showForm}>Add a post</button>
        </div>
    )
}

export default AddButton;
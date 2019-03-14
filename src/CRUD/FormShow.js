import React from 'react';
// import ReactDOM from 'react-dom';

const FormShow = (props) => {
    return(
        <div>
            <form>
            <input type="text" placeholder="Posts" value={props.pValue} onChange={props.onPostChange}></input>
            <input type="text" placeholder="Comments" value={props.cValue} onChange={props.onComChange}></input>
            <input type="submit" value="Submit"></input>
            </form> 
        </div>
    )
}

export default FormShow;
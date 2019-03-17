import React from 'react';

const AllTodoTables = (props)=> {

    const allTodos= props.todo.map((todo)=>{
        return(
            <tr key={todo.id}>
            <th scope="row">{todo.id}</th>
            <td >{todo.to_dos}</td>
            <td>{todo.comments}</td>
            </tr>
        )
    })
    return(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Posts</th>
      <th scope="col">Commentst</th>

    </tr>
  </thead>
  <tbody>
        {allTodos}
  </tbody>
</table>
    )

}

export default AllTodoTables;


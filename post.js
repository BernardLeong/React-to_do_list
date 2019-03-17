let newTodo = {
    "todo": 
    {
        "to_dos": "ddf", "comments": "cfvvfd"
    }
}

window.fetch("localhost:3000/to_dos",{
    method: 'post',
    body: JSON.stringify(newTodo)
})
.then((res)=>{
    return response.json()
})
.then((data)=>{
    console.log('post req',data)
})
import React, { useState } from "react";


function AddTodo(props) {
const [title,setTitle] = useState("");
const [desc,setdesc] = useState("");
const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title and Description must be included")
    }
    
    else{
        props.addTodo(title,desc);
        setTitle("");
        setdesc("");
    }
}
  return (
    <div className="container my-3">
        <h3>Add A Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp" value={title} onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setdesc(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}


export default AddTodo;

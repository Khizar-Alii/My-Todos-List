import React from 'react'
import TodoItem from '../My Components/TodoItem'

function Todos(props) {
  let myStyle = {
    minHeight : "70vh",
    margin : "10px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      
      <h3 className=' my-3'>My Todos List</h3>
      {props.todos.length===0?"Enter Your Todos":props.todos.map((todo)=>{
        return(<TodoItem todo={todo} key= {Math.random()} onDelete={props.onDelete} />)
      })}
     
      
    </div>
  )
}
export default Todos
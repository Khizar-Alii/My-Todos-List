import React from 'react'

function Footer() {
  let style = {
    color : "white",
    fontSize : "20px"
  }
  return (
    <footer>
      <p className='bg-dark py-3 text-center' style={style}>
        Copyright &copy; MyTodosList
      </p>
    </footer>
  )
}

export default Footer

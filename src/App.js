import Header from "./My Components/Header";
import Todos from "./My Components/Todos";
import AddTodo from "./My Components/AddTodo";
import Footer from "./My Components/Footer";
import About from "./My Components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.setItem("todos", JSON.stringify(todos))
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodos([...todos, myTodo]);
  };

  const [todos, settodos] = useState(initTodo);
  //set todo doesnt immediately change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Routes>
          <Route path="/" element={
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos}  onDelete={onDelete} />
              </>
          }/>    
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

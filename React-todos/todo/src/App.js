import AddTodo from "./AddTodo";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import TaskList from "./TaskList";

var array = [
  { name: "apple", id: 1 },
  { name: "banana", id: 2 },
  { name: "graps", id: 3 }

]
var nexId = 4;

function App() {
  const [add, setadd] = useState(array);

  const handleadd = (e) => {
    // console.log(e)
    setadd(
      [
        ...add,
        {
          name: e, id: nexId++
        }
      ]
    )


  }

  const handle2 = (e) => {

    setadd(
      add.map((v) => {

        if (v.id == e.id) {
          return e
        }
  
        else {
          return v
        }
      })
  
    )
  }

  const handle3 = (e) => {
    console.log(e)

    setadd(
      add.filter((v) => {
           return v.id!=e
      })
    )
   
  }
  return (
    <div className="text-center">

      <AddTodo
        props={handleadd}
      />

      <TaskList
        todos={add}
        editstodo={handle2}
        ondeletes={handle3}
      />
    </div>
  );
}

export default App;

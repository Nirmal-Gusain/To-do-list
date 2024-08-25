import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";


function App() {
  const [Title, setTitle] = useState("");
  const [Disc, setDisc] = useState("");
  const [MainTask, setMainTask] = useState("");


  function SubmitHandler(e){
    e.preventDefault()
    setMainTask([...MainTask, {Title , Disc}])
    console.log(MainTask)
    setTitle("")
    setDisc("")
  }

  function DeleteHandel(i){
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
let Rendertask = <h1>No task Available</h1>

if(MainTask.length > 0 ){
  Rendertask = MainTask.map((t,i) => {
    return(
    <li key={1}>
      <div className="flex justify-between px-10">
        <h5 className="mb-4 font-bold">{t.Title}</h5>
        <h5 className="mb-4 font-extralight">{t.Disc}</h5> 
        <button onClick={()=> {DeleteHandel(i)}}><MdDelete /></button>
      </div>
    </li>  
    )
  })
}
  return (
    <>
      <h1 className="bg-slate-800 text-slate-400 text-5xl text-center py-5 font-semibold">
        Nirmal's To-do List
      </h1>
      <form>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={Title}
          className="border-black border-2 m-10 px-7 py-2  text-2xl"
          type="text"
          placeholder="Enter Your Task"
        />
        <input
          onChange={(e) => setDisc(e.target.value)}
          value={Disc}
          className="border-black border-2 m-10 px-7 py-2  text-2xl"
          type="text"
          placeholder="Enter Task Discription"
        />
        <button onClick={SubmitHandler} className="bg-slate-800 py-2 px-5 text-2xl rounded-md m-5 text-white">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-300 text-2xl px-7 py-5  my-7" >
        <ul >{Rendertask}</ul>
      </div>
    </>
  );
}

export default App;

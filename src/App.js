import './App.css';
import React,{useState} from 'react';
import ToDoItem from './ToDoItem';


function App() {

  const [text,setText]=useState("");

  
  
  const [list,setList]=useState([]);

  function OnChange(value)
{
  // console.log(value);
  setText(value);
  
}
function OnClick()
{
  if(text!==""){
  var temp=list;
  temp.push(text);
  setList(temp);
  console.log(list);
  
  setText("");
  }
}

function OnPress(value)
{
  console.log("onpress");
  console.log(value);
  // setText(value);
  
}

  return (
    <div className="App">
    <header className="App-header">
      <div className="card">
        <h1> to do app</h1>
        
        <ul>
          {list.map(l=><ToDoItem key={l} name={l} />)}
        </ul>
        
        <div className="textbox">
          <input id="abc" placeholder="task" value={text} onChange={e=>{OnChange(e.target.value);}}></input>
          <button onClick={OnClick} onKeyPress={e=>OnPress(e.value)}> + </button>
        </div>
      </div>  
    </header>      


    </div>
  );
}



export default App;

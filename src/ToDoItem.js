import React,{useState} from 'react';
import './App.css';

function ToDoItem(props) {
    
    const [sel,setSel]=useState("");

    // var classes=""
    function liClick()
    {
        // setSel(!sel);
        console.log(sel);

        if(sel==="")
        {
            setSel("clicked");
        }
        else{ setSel("");}
    }

    return(
        
        <li className={sel} onClick={liClick} >{props.name}</li>
        
        
    );
}

export default ToDoItem;
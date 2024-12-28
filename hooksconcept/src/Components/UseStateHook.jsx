import { useState } from "react";


export const UseStateHook=()=>{

    const [val, setValue]=useState(0);

    const IncrementFunc=()=>{
        setValue(val+1)
    }
    

    const [text, setText]=useState(' ');

    const InputVal=(event)=>{
       const val = event.target.value;
       setText(val);

    }




return(
    <div>
        <h2 className="Value">{val}</h2>
        <button className="Increment" onClick={()=>IncrementFunc()}>Increment</button>
         
         <br/>
         <br/>
        Enter Here : <input type="text" onChange={(event)=>InputVal(event)} />
        {text}
    </div>
)
}
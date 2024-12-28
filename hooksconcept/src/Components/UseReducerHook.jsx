import {useReducer, useState } from "react";

//state - current state and action is a way to determine the type of action
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "SHOW":
      return { count: state.count, showText: state.showText };

    default:
      return state;
  }
};

export const UseReducerHook = () => {
  //used to collectively manage multiple states
  const [val, SetVal] = useState(true);
  const SeeText = () => {
    SetVal("This is a text");
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  //state holds all the states
  //dispatch is a function - used to change value of states in state object
  //reducer - is a function and {} contains initial values

  return (
    <div>
      <h1 className="value">0</h1>
      <button className="btn" onClick={SeeText}>
        Click To see Text
      </button>
      <p>{val}</p>

      <h1 className="value1">{state.count}</h1>
      <button className="btn1" onClick={()=>{dispatch({type:"INCREMENT"}); dispatch({type:"SHOW"});
    }}>
      click Here
      </button>

      {state.showText && <p>This is useReducer Text</p>}
      

    </div>
  );
};

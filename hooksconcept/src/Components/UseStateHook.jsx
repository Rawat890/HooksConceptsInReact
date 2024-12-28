import { useState } from "react";

/*The useState hook is a fundamental building block in React that allows you to add state management to functional components. It helps you manage and update the state of your component dynamically.

const [state, setState] = useState(initialValue);
state: The current state value.
setState: A function to update the state.
initialValue: The initial value of the state. It can be a number, string, object, array, or even null

How It Works
When you call useState, React sets up a state variable in your component. The setState function updates the value of the state and triggers a re-render of the component to reflect the changes in the UI.


*/

export const UseStateHook = () => {
  const [val, setValue] = useState(0);

  const IncrementFunc = () => {
    setValue(val + 1);
  };

  /*Key Points in the Example:
Initial State: The counter starts at 0 because useState(0) initializes count with 0.

Updating State: Clicking the buttons calls setCount to update the state.

Re-rendering: React re-renders the component whenever the state changes, displaying the updated count.*/


  const [text, setText] = useState(" ");

  const InputVal = (event) => {
    const val = event.target.value;
    setText(val);
  };

  return (
    <div>
      <h2 className="Value">{val}</h2>
      <button className="Increment" onClick={() => IncrementFunc()}>
        Increment
      </button>
      <br />
      <br />
      Enter Here : <input type="text" onChange={(event) => InputVal(event)} />
      {text}
    </div>
  );
};

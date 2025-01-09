import React, { useReducer } from "react";
const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "icrement":
      return state + 1;
    case "decremnt":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
function Hookfun() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <div>Count={count}</div>
      <button onClick={() => dispatch("icrement")}>+</button>
      <button onClick={() => dispatch("decremnt")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Hookfun;

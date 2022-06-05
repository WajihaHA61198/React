import React, { useReducer } from "react";
import "./style.css";

// useState good for smallP and useReducer good for largeP

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};


const UseReducer = () => {
  const initialData = 0;
  // const [myNum, setMyNum] = useState(initialData);

  // reducer take 2 arguments
  // we can't change the value through dispatch as we use to do in useState's second argument
  // Dispatch is use to trigger the user function
  const [state, dispatch] = useReducer(reducer, initialData);
  // state is curent value


  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};
export default UseReducer;
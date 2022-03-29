import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>increment</button>
      <div>{counter}</div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;

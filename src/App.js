import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "./actions/counterActions";
import "./App.css";

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increaseCounter(2));
  };

  const decrement = () => {
    dispatch(decreaseCounter(1));
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      // counter = 0;
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button className="counterbtn" onClick={addValue}>
        Add Value
      </button>
      <button className="counterbtn" onClick={removeValue}>
        Remove Value
      </button>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  //   let counter = 20;
  const [counter, setCounter] = useState(0);

  const addValue = () => setCounter(counter + 1);

  const removeValue = () => setCounter(counter - 1);

  return (
    <>
      <h1>React random stuff {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add</button>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <p>Footer: {counter} </p>
    </>
  );
}

export default App;

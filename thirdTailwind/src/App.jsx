import "./App.css";
import Card from "./components/Card";

let myObj = {
  name: "Mike",
  age: 23,
  adress: {
    city: "Sofia",
    state: "Sofia-city",
    country: "Bulgaria",
  },
};

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-200 p-4 rounded-md">
        Vite with TailWind
      </h1>
      <Card username={myObj.name} post={"Random"} />
      <Card object={myObj} array={newArr} />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    // Runs atleast once
    useEffect(() => {
        // Code that we want to run when sth in the dependency array is changed
        console.log("The count is: " + count);
        // Optional return function
        return () => {
            //Run right before the unmount of the element from the DOM
            console.log("I'm being cleaned up"); //Useful for clearing timeouts,...
        };
    }, [count]); //The dependency array

    /*When something is changed in the dep. array the code inside is run again.
    It rerenders the whole component so all the code is reran. */

    /*We may need some optimizations for the rerenders. If we do some big computing we can use useMemo
    to make the code in it reran only when something in its dep. array is changed. */

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default App;

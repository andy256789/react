import { useState, useMemo } from "react";
import { initialItems } from "./utils";

function Memo() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(
        /*optimizes preformance whithout reruning the same thing 
        again only once then it checks if the dependencies have changed */
        () => items.find((item) => item.id === 2 * count),
        [items, count] //should be used only when needed because it uses a lot of backend resources
        // runs a lot of comparisons which can be costly on the performance
    );

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Selected item: {selectedItem?.id}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Memo;

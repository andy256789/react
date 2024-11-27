import { useState, useCallback } from "react";
import Search from "./Search";

function shuffle(array) {
    const newArray = [...array]; // Copy the original array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const allUsers = ["john", "alex", "george", "simon", "james"];

function Callback() {
    const [users, setUsers] = useState(allUsers);

    //Every time a component is rerendered the functions are different even if they do the same thing
    // That makes it so when we compare something inside a function gotten from the parent element it is different.
    // In this case it makes the code run again which causes the search input box to be rerendered when it is not needed.
    // useCallback freezes the function in time so that it is the same between rerenders

    const handleSearch = useCallback(
        (text) => {
            console.log(users[0]);
            const filteredUsers = allUsers.filter((user) =>
                user.includes(text)
            );
            setUsers(filteredUsers);
        },
        [users]
    );

    return (
        <div className="tutorial">
            <div className="align-center mb-2 flex">
                <button onClick={() => setUsers(shuffle(allUsers))}>
                    Shuffle
                </button>

                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default Callback;

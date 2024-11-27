/* eslint-disable react/prop-types */
import { memo } from "react";

function Search({ onChange }) {
    console.log("Search rendered");

    return (
        <input
            type="text"
            placeholder="search users"
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default memo(Search);

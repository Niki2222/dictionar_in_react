import React from "react";

let input = <input type="text"></input>
let button = <button>Add word</button>

export function AddWords() {
    return (
        <>
            <div>{input}</div>
            <div>{button}</div>
        </>
    )
}
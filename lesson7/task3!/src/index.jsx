import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList.jsx";

const rootElement = document.querySelector("#root");
const users = [
    {
        id: "id-0",
        age: 21,
        name: "Bob1",
    },
    {
        id: "id-1",
        age: 17,
        name: "Tom2",
    },
    {
        id: "id-2",
        age: 18,
        name: "Tad3",
    },
    {
        id: "id-3",
        age: 45,
        name: "Sam4",
    },
    {
        id: "id-4",
        age: 18,
        name: "Tad5",
    },
    {
        id: "id-5",
        age: 45,
        name: "Sam6",
    },
    {
        id: "id-6",
        age: 18,
        name: "Tad7",
    },
    {
        id: "id-7",
        age: 45,
        name: "Sam8",
    },
    {
        id: "id-8",
        age: 18,
        name: "Tad9",
    },
    {
        id: "id-9",
        age: 45,
        name: "Sam10",
    },
];

ReactDOM.render(<UsersList users={users} />, rootElement);

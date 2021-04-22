import React from 'react';
import '../App.css';
import TodoContainer from "./TodoContainer";
import {BrowserRouter} from "react-router-dom";

export default function App () {
    return <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}><TodoContainer/></BrowserRouter>
    </React.StrictMode>
}
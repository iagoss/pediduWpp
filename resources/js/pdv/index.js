import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./pages/home";
import Store from "./redux/reducer";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Home/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('pdv')
)


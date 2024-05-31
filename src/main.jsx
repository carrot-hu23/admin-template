import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import {ThemeProvider2} from "./hooks/useTheme/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider2>
            <App/>
        </ThemeProvider2>
    </React.StrictMode>,
)

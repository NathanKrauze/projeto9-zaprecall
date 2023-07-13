import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalReset from './GlobalStyles/globalReset.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset />
    <App />
  </React.StrictMode>,
)

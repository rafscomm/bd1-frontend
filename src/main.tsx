import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import App from './App'
import NavBar from './components/NavBar/navBar'
import Home from './pages/Home/home'
import './styles/global-styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

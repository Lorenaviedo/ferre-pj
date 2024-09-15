import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { ContextShopping } from './components/Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextShopping>
      <App />
    </ContextShopping>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShoppingCart from './ShoppingCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCart />
  </StrictMode>,
)

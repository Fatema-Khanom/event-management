import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Home from './Pages/Home.jsx'
import ContactUs from './Pages/ContactUs.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/contactus",
      element:<ContactUs></ContactUs>
    }
  
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

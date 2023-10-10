import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Home from './Pages/Home.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Error from './Pages/ErrorPage/Error.jsx'
import SeeMore from './Pages/Component/SeeMore.jsx'
import MyEvents from './Pages/MyEvents.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[{
      path:"/",
      element:<Home></Home>,
      loader:()=> fetch("/data.json"),
    },
    {
      path:"/contactus",
      element:<ContactUs></ContactUs>
    },
    {
      path:"/seeMore/:id",
      element:<SeeMore></SeeMore>,
      loader:()=> fetch("/data.json"),

    },
    {
      path:"/myevents",
      element:<MyEvents></MyEvents>
    }
  
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ContactDetails from './routes/ContactDetails.jsx';
import Pagaments from './routes/Pagaments.jsx';

/*const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"Contact",
    element: <Contact/>
  },
])
*/

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"Contact",
        element: <Contact/>
      },
      {
        path:"/Contact/:id",
        element: <ContactDetails/>
      },
      {
        path:"Pagaments",
        element: <Pagaments/>
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

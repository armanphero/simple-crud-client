import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Users from './components/Users';
import UpdateUser from './components/UpdateUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch('https://simple-crud-server-kohl.vercel.app/users')
  },
  {
    path: "/user/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`https://simple-crud-server-kohl.vercel.app/user/${params.id}`),
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserRegister from './pages/UserRegister.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import PostPage from './pages/PostPage.jsx'
import axios from 'axios'
import SinglePostPage from './pages/SinglePostPage.jsx'
import AuthenticationPage from './pages/Authpage/AuthenticationPage.jsx'

axios.defaults.baseURL="http://localhost:8080"


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />
}, {
  path: "/user",
  element: <UserRegister />,
}, {
  path: "/posts",
  element:<PostPage/>,
},{
  path:"/posts/:id",
  element:<SinglePostPage/>
},
{
  path:"/auth",
  element:<AuthenticationPage/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router} />

  </React.StrictMode>,
)

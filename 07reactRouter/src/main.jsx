import React from "react"
import ReactDOM from "react-dom/client"
import {  createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import "./index.css"
import Layout from "./Layout"
import Home from "./assets/components/Home/Home"
import About from "./assets/components/About/About"
import Contact from "./assets/components/ContactUs/Contact"
import User from "./assets/components/User/User"
import Github, { githubInfoLoader } from "./assets/components/Github/Github"

/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }

    ]
  }
])
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
       <Route
       loader={githubInfoLoader}
       path="github" element={<Github />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router}/>
 
)


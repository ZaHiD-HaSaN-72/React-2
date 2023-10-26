import { createBrowserRouter } from "react-router-dom";
import Nav from "../navbar/shared/nav";
import Home from "../navbar/Home";
import About from "../navbar/About";
import Contact from "../navbar/Contact";
import Student from "../navbar/Student";
import Layout from "../layout/Layout";



const router = createBrowserRouter([
    {
        path:"/",
        element:  <Layout/>,
        children:[
            {
                path:'/Layout/home',
                element: <Home/>
            },
            {
                path:'/Layout/about',
                element: <About/>
            },
            {
                path:'/Layout/contact',
                element: <Contact/>
            },
            {
                path:'/Layout/student',
                element: <Student/>
            }
        ]
        
    }
   
])

export default router;
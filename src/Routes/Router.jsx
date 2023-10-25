import { createBrowserRouter } from "react-router-dom";
import Nav from "../navbar/shared/nav";
import Home from "../navbar/Home";
import About from "../navbar/About";
import Contact from "../navbar/Contact";
import Student from "../navbar/Student";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/contact',
        element: <Contact/>
    },
    {
        path:'/student',
        element: <Student/>
    }
])

export default router;
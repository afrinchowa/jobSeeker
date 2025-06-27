import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<h2>Route not found</h2>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/jobs/:id',
        element:<JobDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'register',
        
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      },
    ]
  },
]);

export default router;
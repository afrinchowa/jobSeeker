import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

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
        element:<PrivateRoute><JobDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'jobApply/:id',       
        element:<JobApply/>
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
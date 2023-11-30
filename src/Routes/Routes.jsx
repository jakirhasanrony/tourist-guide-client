import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import TourGuideProfile from "../Pages/Home/TourGuideProfile/TourGuideProfile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PackageDetails from "../Pages/Home/OurPackages/PackageDetails";
import AllPackage from "../Pages/Home/OurPackages/AllPackage/AllPackage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/guide/:id',
                element: <PrivateRoute><TourGuideProfile></TourGuideProfile></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/guide/${params.id}`)
            },
            {
                path: '/tourPackage/:id',
                element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourPackage/${params.id}`)
            },
            {
                path: 'allPackage',
                element: <AllPackage></AllPackage>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
        ]
    },
]);
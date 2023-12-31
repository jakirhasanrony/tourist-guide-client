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
import CulturalTour from "../Pages/Home/TourTypeSection/CulturalTour/CulturalTour";
import AdventureTour from "../Pages/Home/TourTypeSection/AdventureTour/AdventureTour";
import WildLifeTour from "../Pages/Home/TourTypeSection/WildLifeTour/WildLifeTour";
import CulinaryTours from "../Pages/Home/TourTypeSection/CulinaryTours/CulinaryTours";
import SightseeingTour from "../Pages/Home/TourTypeSection/SightseeingTour/SightseeingTour";
import Dashboard from "../Layout/Dashboard";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import AddPackages from "../Pages/Dashboard/AddPackages/AddPackages";
import AdminRoute from './AdminRoute';
import TouristProfile from "../Pages/Dashboard/TouristProfile/TouristProfile";
import TouristBookings from "../Pages/Dashboard/TouristBookings/TouristBookings";
import StoryMoreDetails from "../Pages/Home/StorySection/StoryMoreDetails";
import AllStory from "../Pages/Home/StorySection/AllStory";
import ProfileOfTourGuide from "../Pages/Dashboard/ProfileOfTourGuide/ProfileOfTourGuide";
import TourGuideAssignTour from "../Pages/Dashboard/TourGuideAssignTour/TourGuideAssignTour";

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
                path: '/stories/:id',
                element: <PrivateRoute><StoryMoreDetails></StoryMoreDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/stories/${params.id}`)
            },
            {
                path: '/tourPackage/:id',
                element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourPackage/${params.id}`)
            },
            {
                path: 'allStory',
                element: <AllStory></AllStory>
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
            {
                path: 'culturaltour',
                element: <CulturalTour></CulturalTour>
            },
            {
                path: 'adventureTour',
                element: <AdventureTour></AdventureTour>
            },
            {
                path: 'wildlifetour',
                element: <WildLifeTour></WildLifeTour>
            },
            {
                path: 'culinarytour',
                element: <CulinaryTours></CulinaryTours>
            },
            {
                path: 'sightseeingtour',
                element: <SightseeingTour></SightseeingTour>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myWishList',
                element: <MyWishList></MyWishList>
            },
            {
                path: 'myProfile',
                element: <TouristProfile></TouristProfile>
            },
            {
                path: 'myBookings',
                element: <TouristBookings></TouristBookings>
            },
            {
                path: 'tourGuideProfile',
                element: <ProfileOfTourGuide></ProfileOfTourGuide>
            },
            {
                path: 'assignTours',
                element: <TourGuideAssignTour></TourGuideAssignTour>
            },



            // admin routes
            {
                path: 'manageUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'adminProfile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: 'addPackages',
                element: <AdminRoute><AddPackages></AddPackages></AdminRoute>
            },
        ]
    }
]);
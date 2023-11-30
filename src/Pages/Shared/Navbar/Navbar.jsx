import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }




    const navOptions = <>
        <li><Link className=" font-bold text-lg" to="/">Home</Link></li>
        <li><Link className=" font-bold text-lg" to="/">Community</Link></li>
        <li><Link className=" font-bold text-lg" to="/">Blogs</Link></li>
        <li><Link className=" font-bold text-lg" to="/">About Us</Link></li>
        <li><Link className=" font-bold text-lg" to="/">Contact Us</Link></li>
        <li>
            <Link to="/">
                <button className="btn text-white  bg-blue-400">
                    WishList
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link>
        </li>



        {
            user ? <>
                <details className="dropdown">
                    <summary className=" ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box bg-blue-400  w-52 text-center">
                        <div className="pr-12 flex justify-start">
                            <button onClick={handleLogOut} className="btn btn-sm btn-ghost -mr[100px] ">LogOut</button>
                        </div>
                        <li><Link to="/">Dashboard</Link></li>

                        <div className="text-sm ">
                            <p className="text-start">User Details:</p>
                            <hr />
                            <p className="text-start my-2">Name: {user?.displayName}</p>
                            <p className="text-start mb-2">Email: {user?.email}</p>
                        </div>
                    </ul>
                </details>

            </> : <>
                <li><Link className=" font-bold text-lg" to="/login">Login</Link></li>
            </>
        }


    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black flex justify-between text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="w-24 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/4Nt5WN8/png-transparent-infographic-travel-chart-global-travel-leaf-logo-world-removebg-preview.png" />
                        </div>
                        <button className="btn btn-ghost text-xl">TouristGuide</button>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div>
                    <div className="dropdown dropdown-end mr-4">
                        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
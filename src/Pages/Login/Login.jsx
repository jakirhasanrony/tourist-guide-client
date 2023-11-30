import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successful",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
    }
    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YpQ1Cjk/white-abstract-background-design-361591-895.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div>
                        <div className=" ">

                            <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                                <div className="w-full min-h-screen  flex justify-center items-center">
                                    <div>
                                        <img className="lg:h-[600px]" src="https://i.ibb.co/4Nt5WN8/png-transparent-infographic-travel-chart-global-travel-leaf-logo-world-removebg-preview.png" alt="" />
                                    </div>
                                </div >
                                <div className="w-full min-h-screen flex justify-center  items-center ">
                                    <div className="w-full p-6">
                                        <h2 className="text-center text-gray-500 font-bold text-3xl py-5">Please Login</h2>
                                        <form onSubmit={handleLogin} className="w-full">
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="provide your email here" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control relative">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    placeholder="Provide your password here" className="input input-bordered" required />
                                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-3 text-xl">
                                                    {
                                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                    }

                                                </span>
                                            </div>
                                            <div className="form-control mt-6">
                                                <input className="btn bg-blue-400 text-white" type="submit" value="Login" />
                                            </div>
                                        </form>
                                        <p className="text-center text-gray-500 py-5  ">Do not have an account? Please <Link className="font-bold text-blue-500 " to="/signup">Register</Link></p>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;
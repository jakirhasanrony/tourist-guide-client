import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);




    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile updated')
                        reset();
                        Swal.fire({
                            title: "User created successfully",
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
                        logOut()
                            .then(() => {
                                navigate("/login");
                            })
                    })
                    .catch(error => console.log(error))
            })
    };







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
                                        <h2 className="text-center text-gray-500 font-bold text-3xl py-5">Please SignUp</h2>
                                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <input {...register("name", { required: true })} type="text" name="name" placeholder="provide your name here" className="input input-bordered" />
                                                {errors.name && <span className="font-bold text-red-600">Name is required</span>}
                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Image Url</span>
                                                </label>
                                                <input {...register("imageUrl", { required: true })} type="text" name="imageUrl" placeholder="provide your image url here" className="input input-bordered" />
                                                {errors.imageUrl && <span className="font-bold text-red-600">Image Url is required</span>}
                                            </div>
                                            <div className="form-control ">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input {...register("email", { required: true })} type="email" name="email" placeholder="provide your email here" className="input input-bordered" />
                                                {errors.email && <span className="font-bold text-red-600">Email is required</span>}
                                            </div>
                                            <div className="form-control relative">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                                })}
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    placeholder="Provide your password here" className="input input-bordered" />
                                                {errors.password?.type === "required" && (
                                                    <p className="text-red-600 font-bold">Password is required</p>
                                                )}
                                                {errors.password?.type === "minLength" && (
                                                    <p className="text-red-600 font-bold">Password must be 6 characters</p>
                                                )}
                                                {errors.password?.type === "maxLength" && (
                                                    <p className="text-red-600 font-bold">Password must be less than 20 characters</p>
                                                )}
                                                {errors.password?.type === "pattern" && (
                                                    <p className="text-red-600 font-bold">Password must one Uppercase, one lowercase, one number and one special character</p>
                                                )}
                                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-3 text-xl">
                                                    {
                                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                                    }

                                                </span>
                                            </div>
                                            <div className="form-control mt-6">
                                                <input className="btn bg-blue-400 text-white" type="submit" value="Sign Up" />
                                            </div>
                                        </form>
                                        <p className="text-center text-gray-500 py-5  ">Already have an account? Please <Link className="font-bold text-blue-500 " to="/login">Login</Link></p>
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

export default SignUp;
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    imageUrl: result.user?.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline"><div className="flex justify-center items-center gap-2">
                <FaGoogle className="text-blue-500"></FaGoogle>
                <h2 className="text-black font-bold"> Google</h2>
            </div></button>
        </div>
    );
};

export default SocialLogin;
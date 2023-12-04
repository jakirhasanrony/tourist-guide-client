import useAuth from "../../../Hooks/useAuth";

const ProfileOfTourGuide = () => {
    const { user } = useAuth();
    return (
        <div className="bg-blue-200 min-h-screen">
            <div>
                <h2 className="text-center font-bold text-3xl py-12">Tour Guide Profile</h2>
                <hr />
            </div>
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{user.displayName}</h1>
                            <p className="py-6">Role: Tour Guide</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileOfTourGuide;
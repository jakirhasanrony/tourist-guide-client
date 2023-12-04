import useAuth from "../../../Hooks/useAuth";

const AdminProfile = () => {
    const { user } = useAuth();
    // console.log(user);
    // console.log(user.displayName);
    // console.log(user.displayName);
    return (
        <div className="bg-blue-200 min-h-screen">
            <div className="pt-12">
                <h2 className="text-4xl text-center font-bold my-6">Admin Profile</h2>

                <hr />
            </div>
            <div className="flex justify-center items-center">
                <div className="hero  bg-blue-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{user.displayName}</h1>
                            <p className="py-6">The website admin possesses a multifaceted role, wielding the ability to curate, manage, and refine the online platform has tour packages while functioning as an author. This versatile position empowers them to create and upload enticing tour packages, meticulously detailing destinations, itineraries, pricing, and special features to captivate potential travelers. They deftly manage existing packages, swiftly adapting information based on feedback or evolving features. As an author, the admin crafts engaging content, weaving informative narratives about destinations, accommodations, local cultures, and activities, enriching the site with valuable travel insights. Beyond this, they oversee content accuracy, ensuring SEO-friendly and up-to-date information across the website, while also engaging with users to offer guidance, support, and personalized recommendations, fostering an immersive and seamless user experience.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
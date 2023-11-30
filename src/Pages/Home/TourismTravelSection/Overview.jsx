
const Overview = () => {
    return (
        <div >
            <div>
                <div className="mx-auto text-center md:w-4/12 my-5">
                    <h3 className=" font-bold uppercase border-y-4 py-4">Overview: A Visual Journey</h3>
                </div>
            </div>
            <div className="my-8 p-8 flex flex-wrap justify-center items-center gap-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SOpfxXaELRY?si=WHGk961cRyJc-Wy_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GfxtZejlXg4?si=sgPTGXw6t24OtWIp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fVsONlc3OUY?si=X9wOfBgJAwk21OM6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>


        </div>
    );
};

export default Overview;
import userImage from "../../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="w-screen bg-[linear-gradient(90deg,_rgba(126,_144,_254,_0.05)_0%,_rgba(152,_115,_255,_0.05)_100%)]">
      <div className="flex items-center justify-between lg:gap-16 gap-5 mx-[5%] lg:mx-[12%]">
        <div className="flex flex-col gap-6 lg:max-w-lg lg:mt-36 mt-28">
          <h3 className="font-extrabold lg:text-7xl text-4xl lg:leading-[6.25rem]">
            One Step Closer To Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
              Dream Job
            </span>
          </h3>
          <p className="text-lg font-medium text-justify">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div>
            <button className="button-custom">Get Started</button>
          </div>
        </div>
        <div className="lg:mt-36 mt-28 lg:block hidden">
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

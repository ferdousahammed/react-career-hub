import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [dataLen, setDataLen] = useState(4);
  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  const handleSeeAllJobs = () => {
    setDataLen(featuredJobs.length);
  };
  return (
    <div className="lg:mx-[12%] mx-[5%] lg:my-20 my-10">
      <div className="max-w-lg mx-auto text-center space-y-4 ">
        <h3 className="lg:text-5xl text-2xl font-extrabold">Featured Jobs</h3>
        <p className="font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {featuredJobs.slice(0, dataLen).map((job) => (
          <FeaturedJob job={job} key={job.id} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => handleSeeAllJobs()}
          className={`button-custom-2 mt-6 ${dataLen > 4 && "hidden"}`}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

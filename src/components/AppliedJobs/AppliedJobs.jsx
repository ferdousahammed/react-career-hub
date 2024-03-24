import { useLoaderData } from "react-router-dom";
import BannerSecondary from "../Home/Banner/BannerSecondary";
import FeaturedJob from "../Home/FeaturedJobs/FeaturedJob/FeaturedJob";
import { useEffect, useState } from "react";
import { getStoredLocalStorage } from "../../utils/helper";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayAppliedJob, setDisplayAppliedJob] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredLocalStorage();
    if (jobs.length > 0) {
      let jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayAppliedJob(jobsApplied);
    }
  }, []);

  const handleFilter = (type) => {
    if (!(type === "All")) {
      const filtered = appliedJobs.filter(
        (job) => job.remote_or_onsite === type
      );
      setDisplayAppliedJob(filtered);
    } else {
      setDisplayAppliedJob(appliedJobs);
    }
  };
  return (
    <div>
      <div className="lg:mb-20 mb-10">
        <BannerSecondary bannerText={"Applied Jobs"} />
      </div>
      <div className="lg:mx-[12%] mx-[5%] mb-5 flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn">
            Filter By <MdOutlineKeyboardArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex flex-col gap-6 lg:mx-[12%] mx-[5%] lg:mb-20 mb-10">
        {displayAppliedJob.map((job) => (
          <FeaturedJob job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border-2 rounded-lg p-10 space-y-4">
      <img src={logo} alt="" />
      <h2 className="text-2xl font-extrabold">{job_title}</h2>
      <p className="text-xl font-semibold text-gray-500">{company_name}</p>
      <div className="flex gap-4 mt-4">
        <button className="border-2 rounded-lg border-violet-500 bg-transparent font-bold px-4 py-2 text-violet-500">
          {remote_or_onsite}
        </button>
        <button className="border-2 rounded-lg border-violet-500 bg-transparent font-bold px-4 py-2 text-violet-500">
          {job_type}
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 text-xl font-semibold text-gray-500">
        <h3 className="flex gap-3 items-center">
          {" "}
          <IoLocationOutline /> {location}
        </h3>
        <h3 className="flex gap-3 items-center">
          {" "}
          <HiOutlineCurrencyBangladeshi />
          {salary}
        </h3>
      </div>
      <Link to={`/job/${id}`}>
        <button className="button-custom-2 mt-6">View Details</button>
      </Link>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object,
};

export default FeaturedJob;

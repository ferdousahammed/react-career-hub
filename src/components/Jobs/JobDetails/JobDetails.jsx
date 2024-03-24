import { useLoaderData, useParams } from "react-router-dom";
import BannerSecondary from "../../Home/Banner/BannerSecondary";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { PiSubtitles } from "react-icons/pi";
import { saveToLocalStorage } from "../../../utils/helper";

const JobDetails = () => {
  const jobs = useLoaderData();
  const currentId = useParams();
  const job = jobs.find((job) => job.id == currentId.id);
  return (
    <div className="lg:mb-20 mb-10">
      <BannerSecondary bannerText={"Job Details"} />
      <div className="lg:mt-20 mt-10 grid grid-cols-7 gap-6 lg:mx-[12%] mx-[5%]">
        <div className="lg:col-span-4 col-span-7 space-y-4">
          <p className="font-medium text-neutral-500">
            <span className="font-extrabold text-black">Job Description:</span>{" "}
            {job.job_description}
          </p>
          <p className="font-medium text-neutral-500">
            <span className="font-extrabold text-black">
              Job Responsibility:
            </span>{" "}
            {job.job_responsibility}
          </p>
          <p className="font-medium text-neutral-500">
            <span className="font-extrabold text-black">
              Educational Requirements:
            </span>{" "}
            <br />
            <br />
            {job.educational_requirements}
          </p>
          <p className="font-medium text-neutral-500">
            <span className="font-extrabold text-black">Experiences:</span>{" "}
            <br />
            <br />
            {job.experiences}
          </p>
        </div>
        <div className="lg:col-span-3 col-span-7">
          <div className="bg-violet-500 bg-opacity-10 p-7 rounded-lg">
            <h3 className="text-xl font-extrabold">Job Details</h3>
            <hr className="my-6" />
            <div className="flex gap-2 items-center">
              <HiOutlineCurrencyBangladeshi className="text-xl" />
              <p className="text-xl font-medium text-neutral-500">
                {" "}
                <span className="font-bold text-black">Salary :</span>{" "}
                {job.salary} (Per Month)
              </p>
            </div>
            <div className="flex gap-2 items-center mt-6 mb-7">
              <PiSubtitles className="text-xl" />
              <p className="text-xl font-medium text-neutral-500">
                {" "}
                <span className="font-bold text-black">Job Title :</span>{" "}
                {job.job_title}
              </p>
            </div>
            <h3 className="text-xl font-extrabold">Contact Information</h3>
            <hr className="my-6" />
            <div className="flex gap-2 items-center">
              <IoCallOutline className="text-xl" />
              <p className="text-xl font-medium text-neutral-500">
                {" "}
                <span className="font-bold text-black">Phone :</span>{" "}
                {job.contact_information.phone}
              </p>
            </div>
            <div className="flex gap-2 items-center mt-6">
              <IoMailOpenOutline className="text-xl" />
              <p className="text-xl font-medium text-neutral-500">
                {" "}
                <span className="font-bold text-black">Email:</span>{" "}
                {job.contact_information.email}
              </p>
            </div>
            <div className="flex gap-2 items-center mt-6">
              <IoLocationOutline className="text-2xl" />
              <p className="text-xl font-medium text-neutral-500">
                {" "}
                <span className="font-bold text-black">Address:</span>{" "}
                {job.contact_information.address}
              </p>
            </div>
          </div>
          <button
            onClick={() => saveToLocalStorage(job.id)}
            className="button-custom-2 mt-6 w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

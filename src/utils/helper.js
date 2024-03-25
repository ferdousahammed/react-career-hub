import toast from "react-hot-toast";
const getStoredLocalStorage = () => {
  const storedItems = localStorage.getItem("applied-jobs");
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [];
};

const saveToLocalStorage = (id) => {
  const storedItems = getStoredLocalStorage();
  const isExistJob = storedItems.find((jobId) => jobId === parseInt(id));

  if (!isExistJob) {
    storedItems.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(storedItems));
    toast.success("Job application is completed");
  } else {
    toast.error("Already applied for that job");
  }
};

export { getStoredLocalStorage, saveToLocalStorage };

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
    toast("Job application is completed");
  } else {
    toast("Already applied for that job");
  }
};

export { getStoredLocalStorage, saveToLocalStorage };

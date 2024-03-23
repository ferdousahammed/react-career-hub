import { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox/CategoryBox";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="lg:mx-[12%] mx-[5%] lg:my-20 my-10">
      <div className="max-w-lg mx-auto text-center space-y-4">
        <h3 className="lg:text-5xl text-2xl font-extrabold">
          Job Category List
        </h3>
        <p className="font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-between mt-8 flex-col lg:flex-row items-center gap-5">
        {categories.map((category) => (
          <CategoryBox category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

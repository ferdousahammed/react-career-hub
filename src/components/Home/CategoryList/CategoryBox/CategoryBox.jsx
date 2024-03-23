import PropTypes from "prop-types";

const CategoryBox = ({ category }) => {
  const { logo, availability, category_name } = category;
  return (
    <div className="p-10 bg-violet-500 bg-opacity-5 rounded-lg">
      <div className="p-4 bg-violet-500 bg-opacity-10 max-w-[70px] rounded-lg mb-8">
        <img src={logo} alt="" />
      </div>
      <h2 className="font-extrabold text-xl mb-2">{category_name}</h2>
      <p className="font-medium text-gray-400">{availability}</p>
    </div>
  );
};

CategoryBox.propTypes = {
  category: PropTypes.object,
};

export default CategoryBox;

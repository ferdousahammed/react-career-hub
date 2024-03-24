import PropTypes from "prop-types";

const BannerSecondary = ({ bannerText }) => {
  return (
    <div className="relative bg-violet-500 bg-opacity-5">
      <div className="flex justify-end">
        <img src="https://i.postimg.cc/CKjgy3HN/bg2.png" alt="" />
      </div>
      <h3 className="text-4xl font-extrabold top-1/2 left-1/2 -translate-x-1/2 t absolute">
        {bannerText}
      </h3>
      <div>
        <img src="https://i.postimg.cc/Gt3rxXDj/bg1.png" alt="" />
      </div>
    </div>
  );
};

BannerSecondary.propTypes = {
  bannerText: PropTypes.string,
};

export default BannerSecondary;

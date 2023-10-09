import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  // console.log(service);
const {id,service_name,cover_img,service_subtitle} = service;



  return (
    <div className="card  shadow-xl image-full">
      <figure className="h-[280px]">
        <img className="h-full w-full"
          src={cover_img}
          alt={`${service_name} image`}
        />
      </figure>
      <div className="w-full h-full absolute top-0 left-0 rounded-2xl   bg-black opacity-30"></div>
      <div className="card-body">
        <h2 className="card-title mt-10 justify-center text-2xl font-bold text-[#fcb41e]">{service_name}</h2>
        <p className="text-center">{service_subtitle}</p>
        <div className="card-actions justify-end">
          <Link to={`/${id}`}>
          <button  className="btn bg-[#fcb41e] hover:bg-[#fcb41e] border-none text-black font-bold normal-case">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
};

export default Service;

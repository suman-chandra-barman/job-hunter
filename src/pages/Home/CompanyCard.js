import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const CompanyCard = ({ job }) => {
  const { company, location } = job;
  return (
    <div className="md:flex justify-between items-center my-2 border py-2 px-5 rounded-lg">
      <div>
        <h3 className="md:text-2xl text-xl">{company}</h3>
        <div className="md:flex items-center mt-1 gap-10">
          <h4 className="flex gap-1 items-center mt-2 md:mt-0">
            <span>
              <HiLocationMarker />
            </span>
            <span>{location}</span>
          </h4>
        </div>
      </div>
      <div className=" mt-2 md:mt-0">
        <button className="btn btn-success">View Details</button>
      </div>
    </div>
  );
};

export default CompanyCard;

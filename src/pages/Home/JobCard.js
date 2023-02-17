import React from "react";
import { HiCreditCard, HiLocationMarker } from "react-icons/hi";

const jobCard = ({ job }) => {
  const { position, location, company } = job;
  return (
    <div className="md:flex justify-between items-center my-2 border py-3 px-5 md:p-5 rounded-lg">
      <div>
        <h3 className="md:text-3xl text-2xl">{position}</h3>
        <div className="md:flex items-center mt-4 gap-10 md:text-xl">
          <h4 className="flex gap-1 items-center mt-2 md:mt-0">
            <span>
              <HiCreditCard />
            </span>
            <span>{company}</span>
          </h4>
          <h4 className="flex gap-1 items-center mt-2 md:mt-0">
            <span>
              <HiLocationMarker />
            </span>
            <span>{location}</span>
          </h4>
        </div>
      </div>
      <div className=" mt-2 md:mt-0">
        <button className="btn btn-success">Apply Job</button>
      </div>
    </div>
  );
};

export default jobCard;

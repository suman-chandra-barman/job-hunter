import React from "react";
import { HiCreditCard } from "react-icons/hi";

const CompanyCard = () => {
  return (
    <div className="flex justify-between items-center my-2 border rounded-md px-5 py-3">
      <h4 className="flex gap-2 items-center mt-2 md:mt-0 md:text-xl">
        <span>
          <HiCreditCard />
        </span>
        <span>Elien Technology</span>
      </h4>
      <button className="btn btn-sm btn-success">View Details</button>
    </div>
  );
};

export default CompanyCard;

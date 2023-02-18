import React from "react";
import BDTopITCompanies from "./BDTopITCompanies";
import WorldwideTopItCompanies from "./WorldwideTopItCompanies";

const TopITCompanies = () => {
  return (
    <section className="my-20">
      <h2 className="text-center text-3xl md:text-4xl mb-5 underline">
        Top IT Companies
      </h2>
      <div className="md:flex justify-between gap-5">
        <BDTopITCompanies />
        <WorldwideTopItCompanies />
      </div>
    </section>
  );
};

export default TopITCompanies;

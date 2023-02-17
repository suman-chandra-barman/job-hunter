import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

const BDTopITCompanies = () => {
  const [BDTopITCompanies, setBDTopITCompanies] = useState([]);
  useEffect(() => {
    fetch("fresherJobs.json")
      .then((res) => res.json())
      .then((data) => {
        setBDTopITCompanies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="my-10">
      <h2 className="text-center text-2xl md:text-4xl mb-5">
        Top 3 IT Companies in Bangladesh
      </h2>
      {BDTopITCompanies.map((job) => (
        <CompanyCard key={job._id} job={job} />
      ))}
    </section>
  );
};

export default BDTopITCompanies;

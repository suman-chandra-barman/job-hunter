import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

const WorldwideTopItCompanies = () => {
  const [WorldwideTopItCompanies, setWorldwideTopItCompanies] = useState([]);
  useEffect(() => {
    fetch(
      "https://job-hunter-server-suman-chandra-barman.vercel.app/worldwideItCompanies"
    )
      .then((res) => res.json())
      .then((data) => {
        setWorldwideTopItCompanies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="my-10">
      <h2 className="text-center text-2xl md:text-4xl mb-5">
        Top 3 IT Companies Worldwide
      </h2>
      {WorldwideTopItCompanies.map((job) => (
        <CompanyCard key={job._id} job={job} />
      ))}
    </section>
  );
};

export default WorldwideTopItCompanies;

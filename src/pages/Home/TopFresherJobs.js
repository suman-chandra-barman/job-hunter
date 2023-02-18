import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const TopFresherJobs = () => {
  const [topFresherJobs, setTopFresherJobs] = useState([]);
  useEffect(() => {
    fetch(
      "https://job-hunter-server-suman-chandra-barman.vercel.app/fresherJobs"
    )
      .then((res) => res.json())
      .then((data) => {
        setTopFresherJobs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="my-10">
      <h2 className="text-center text-3xl md:text-4xl mb-5 underline">
        Top Fresher Jobs
      </h2>
      {topFresherJobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
      <div className="text-center mt-5">
        <button className="btn btn-primary px-10 md:px-20 text-white">
          See All Jobs
        </button>
      </div>
    </section>
  );
};

export default TopFresherJobs;

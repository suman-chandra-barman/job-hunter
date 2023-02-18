import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const TopExperiencedJobs = () => {
  const [topExperiencedJobs, setTopExperiencedJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fresherJobs")
      .then((res) => res.json())
      .then((data) => {
        setTopExperiencedJobs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="my-20">
      <h2 className="text-center text-3xl md:text-4xl mb-5 underline">
        Top Experienced Jobs
      </h2>
      {topExperiencedJobs.map((job) => (
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

export default TopExperiencedJobs;

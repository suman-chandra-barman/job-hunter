import React from "react";
import TopExperiencedJobs from "./TopExperiencedJobs";
import TopFresherJobs from "./TopFresherJobs";
import TopITCompanies from "./TopITCompanies";

const Home = () => {
  return (
    <div className="container mx-auto">
      <TopFresherJobs />
      <TopExperiencedJobs />
      <TopITCompanies />
    </div>
  );
};

export default Home;

import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
  <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8">
    <ServiceCard count={"1M+"} text={"Happy Students"} />
    <ServiceCard count={"50+"} text={"Happy Custumer"} />
    <ServiceCard count={"50+"} text={"Full-Stack Project"} />
    <ServiceCard count={"100+"} text={"Public Project"} />
    </div>
  );
};

export default ServiceCount;

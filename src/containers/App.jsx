import React from "react";
import {About, Contact, Header, Home, Projects, ServiceCount, Skills} from "./"

const App = () => {
  return (
    <div className="w-full xl:max-w-[1600px] py-12 px-4 lg:px-12 pr-4 lg:pr-32 ">
      {/*particles container */}
      {/*header */}
      <Header />
      {/*home container */}
      <Home />
      {/* services count container */}
      <ServiceCount />
      {/*about container */}
      <About />
      {/*skills container */}
      <Skills />
      {/*project container */}
      <Projects />
      {/*contact container */}
      <Contact />
      {/*footer container */}
    </div>
  );
};

export default App;

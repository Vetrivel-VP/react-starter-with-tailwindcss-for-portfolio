import React from "react";
import {About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills} from "./"
import { HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
import {motion, AnimatePresence} from 'framer-motion'

const App = () => {
  return (
    <div className="w-full xl:max-w-[1600px] py-12 px-4 lg:px-12 pr-4 lg:pr-32 ">
      {/*particles container */}
      <ParticlesContainer />
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
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12 ">
        <p className="text-3xl tracking-wide text-texlight ">Karimli Aghabala</p>
        <div className="flex items-center justify-center gap-16 mt-16 ">
        <AnimatePresence>
            {Socials && Socials.map((item,index) =>(
              <HomeSocialLinks key={index} data={item} index={index} />
            )) }
          </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12 ">
          <p className="text-texlight text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio ullam dolores ea praesentium voluptates voluptatem nesciunt eaque repudiandae. Fugit nostrum perspiciatis minima ut repellendus illum, temporibus et vitae recusandae.
          </p>
          <p className="text-texlight text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio ullam dolores ea praesentium voluptates voluptatem nesciunt eaque repudiandae. Fugit nostrum perspiciatis minima ut repellendus illum, temporibus et vitae recusandae.
          </p>
          <div className=" w-full flex flex-col items-center justify-center gap-3">
              <p className="text-texlight text-center">agabala.93@gmail.com</p>
              <p className="text-texlight text-center">+994-50-413-15-97</p>
              <a href="#">
                <p className="text-primary text-center">Hire me</p>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Hero} from "../assets"
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return(
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">

            <h2 className="text-3xl lg:text-4xl text-texlight">
              Hello, It's me 
              <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
                {" "}
                Karimli Aghabala
                </span>
            </h2>
            {/* typewitter */}
            <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
              And I'am <HeroTypeWritter speed={100} words={["a Web Developer..", " a Freelanzer"]} />
            </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eos provident possimus! Ut, aspernatur obcaecati!</p>
        {/* sosial media links   */}

        <div className="flex items-center justify-center gap-16 mt-16 ">
        <AnimatePresence>
            {Socials && Socials.map((item,index) =>(
              <HomeSocialLinks key={index} data={item} index={index} />
            )) }
          </AnimatePresence>
        </div>
        </div>
        {/* hero section */}
        <div className="w-full h-full flex items-start justify-center lg:items-center">
          <motion.img 
          initial={{ y : 0 }}
          animate={{ y : [-10,10,-10] }}
          transition={{
            repeat : Infinity,
            duration : 2,
            ease : "linear",
          }}
          src={Hero} 
          className="max-w-[500px] h-auto object-contain"/>
        </div>
      </div>
    </section>
  )
};

export default Home;

import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Hero} from "../assets"
import { HeroTypeWritter, HomeSocialLinks} from "../components";
import { Socials } from "../utils/helper";
import Language from "../components/Language";
import {useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();
  return(
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative pl-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* language container */}
        <div className=" w-full flex items-center justify-center fixed  top-0 pt-3 z-50">
          <Language />
        </div>
        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">

            <h2 className="text-3xl lg:text-4xl text-texlight">
              {t('hello')} 
              <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
                {" "}
                {t("name")}
                </span>
            </h2>
            {/* typewitter */}
            <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
              {t('i')} <HeroTypeWritter speed={100} words={[t('dev'),t('fre')]}  />
            </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left  ">{t('info1')}</p>
        {/* sosial media links   */}

        <div className="flex items-center justify-center gap-16 mt-16 ">
        <AnimatePresence>
            {Socials && Socials.map((item,index) =>(
              <HomeSocialLinks key={index} data={item} index={index} />
            )) }
          </AnimatePresence>
        </div>
        {/* hire me */}
          <a 
          href="https://wa.me/message/2HVPAGLOC4HJP1" 
          style={{boxShadow : "inset 0px 0px 10px rgba(255,255,255,0.4)"}}
          className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary">
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">{t('contact')}</p>
          </a>
        </div>
        {/* hero section */}
        <div className="w-full h-full flex items-start justify-center lg:items-center ">
          <motion.img 
          initial={{ y : 0 }}
          animate={{ y : [-10,10,-10] }}
          transition={{
            repeat : Infinity,
            duration : 2,
            ease : "linear",
          }}
          src={Hero} 
          className="max-w-[500px] h-auto object-contain  lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative "/>
        </div>
      </div>
    </section>
  )
};

export default Home;

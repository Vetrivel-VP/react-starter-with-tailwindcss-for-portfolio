import React from "react";
import {motion,AnimatePresence} from 'framer-motion'

const SkillCard = ({skill, percentage, color, move}) => {
  return (
    <div 
    className={`border border-[rgba(255,255,255, 0.3)] rounded-md px-8 py-3 cursor-pointer group w-full flex items-center justify-between relative gap-2 `}
    style={{
      boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",
    }}
     >
      {/* name section */}
      <div className="flex-1 flex-col items-start justify-start flex gap-2 ">
        <p className="text-base text-white ">{skill}</p>
        <div className="w-full h-1 rounded-md overflow-hidden bg-[rgba(255,255,255,0.2)] relative ">
          <motion.div 
          initial={{width: 0 }}
          animate={{width: percentage}}
          transition={{ duration: 1.5}}
          className="h-full absolute top-0 left-0 "
          style={{background: color}}
          >

          </motion.div>
        </div>
      </div>
      {/* percentage  */}

      </div>
  );
};

export default SkillCard;

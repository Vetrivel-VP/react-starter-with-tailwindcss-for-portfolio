import React from "react";
import {motion, AnimatePresence} from 'framer-motion'

const Alert = ({status, mesagge }) => {
  const statusConfig = {
    succes:{
      bgColor:"bg-primary",
      borderColor:"border-primary",
      textColor:"text-primary",
    },
    warning:{
      bgColor:"bg-yellow-400",
      borderColor:"border-yellow-400",
      textColor:"text-yellow-400",
    },
    danger:{
      bgColor:"bg-red-400",
      borderColor:"border-red-400",
      textColor:"text-red-400",
    },
  };
  const config = statusConfig[status]
  return (
    <motion.div
    initial={{opacity : 0, x : 50}}
    animate={{opacity : 1, x : 0}}
    exit={{opacity : 0, x : 50}}
    className={`fixed top-12 right-12 px-3 py-3 rounded-md border ${config.borderColor} w-auto overflow-hidden backdrop-blur-md `}
    >
      <p className={`${config.textColor}`}>{mesagge}</p>
      <div className="absolute inset-x-0 h-1 bottom-0 bg-[rgba(255,255,255,0.4)] ">
        <motion.div
        initial={{width: 0}} 
        animate={{width: "100%" }}
        exit={{width: 0}} 
        transition={{duration: 4, delay: 0.5}}
        className={`${config.bgColor} h-full`}>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;

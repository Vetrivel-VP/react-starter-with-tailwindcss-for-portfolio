import React from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { Leaf1, Leaf2} from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section 
    id="skills" 
    className="flex items-center justify-center flex-col gap-12 my-12"
    >
    {/* title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
      initial={{opacity : 0, width: 0}} 
      animate={{opacity : 1, width: 200}} 
      exit={{opacity : 0, width: 0}} 
      transition={{delay: 0.3}}
      className="flex items-center justify-around w-52">
        <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf" />
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">
          Skills
          </p>
        <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf" />
      </motion.div>
    </div>
    {/* main container */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

      {/* content section */}
      <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">
          My skills & Work Experience 
          </p>
      <p className="text-texlight text-base tracking-wide text-justify  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, distinctio nobis soluta molestias fuga, hic quod id et eos voluptas est quis sapiente harum nemo vitae doloribus numquam rem repellat doloremque ea! Sint dolores nostrum inventore neque, enim molestiae sed obcaecati soluta, quos fugit ad? Temporibus doloribus rem eligendi quaerat.
      </p>
      <p className="text-texlight text-base tracking-wide text-justify  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, distinctio nobis soluta molestias fuga, hic quod id et eos voluptas est quis sapiente harum nemo vitae doloribus numquam rem repellat doloremque ea! Sint dolores nostrum inventore neque, enim molestiae sed obcaecati soluta, quos fugit ad? Temporibus doloribus rem eligendi quaerat.
      </p>
      <p className="text-texlight text-base tracking-wide text-justify  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, distinctio nobis soluta molestias fuga, hic quod id et eos voluptas est quis sapiente harum nemo vitae doloribus numquam rem repellat doloremque ea! Sint dolores nostrum inventore neque, enim molestiae sed obcaecati soluta, quos fugit ad? Temporibus doloribus rem eligendi quaerat.
      </p>
      <p className="text-texlight text-base tracking-wide text-justify  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, distinctio nobis soluta molestias fuga, hic quod id et eos voluptas est quis sapiente harum nemo vitae doloribus numquam rem repellat doloremque ea! Sint dolores nostrum inventore neque, enim molestiae sed obcaecati soluta, quos fugit ad? Temporibus doloribus rem eligendi quaerat.
      </p> 
      </div>
            {/* image section */}
      <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
        <SkillCard skill={"HTML5"} percentage={"95%"} color={"#FF3F3F"}  />
        <SkillCard skill={"CSS 3 (SCSS,Bootstrap,Tailwind)"} percentage={"85%"} color={"#008FFF"}  move={true}/>
        <SkillCard skill={"Java Script"} percentage={"75%"} color={"#FFB900"} />
        <SkillCard skill={"React JS"} percentage={"65%"} color={"#00FFF3"} move={true} />
        <SkillCard skill={"Node JS"} percentage={"60%"} color={"#FFE400"} />
        <SkillCard skill={"MS-SQL,My-SQL,MongoDB"} percentage={"80%"} color={"#FF3FFF"} move={true} />
      </div>
    </div>
    </section>
  );
};

export default Skills;

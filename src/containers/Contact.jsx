import React,{useState} from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { Leaf1, Leaf2 } from "../assets";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase.config'

const Contact = () => {
const [data, setData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mesagge: "",
});

const handleTextChange = (e)=>{
      const {name,value} = e.target
      // update the state for the corresponding input values 
      setData((prevData) =>({ ...prevData, [name]: value }));
}
const sendMesagge = async () => {
  if(data.email === "" || data.email === null){
    //throw and alert
  }else{
    await addDoc(collection(db, "mesagges"), {...data}).then(()=>{
      //throw that alert mesagge
    }).catch(err=>{
      //throw that alert 
    })
  }
} 

  return (
    <section 
    id="contact" 
    className="flex items-center justify-center flex-col gap-8 my-12"
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
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">Contact Me</p>
        <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf" />
      </motion.div>
    </div>
    {/* main container */}
    <div className=" w-full flex flex-col items-center justify-start gap-4">
      <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4  ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name " 
          value={data.firstName}
          onChange={handleTextChange}
          className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white " />
          <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name " 
          value={data.lastName}
          onChange={handleTextChange}
          className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white " />
        </div>
        {/* email field */}
        <input 
        type="email" 
        name="email"
        placeholder="E-mail " 
        value={data.email}
        onChange={handleTextChange}
        className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white " />
        <textarea 
        name="mesagge" id="" cols="30" rows="10" 
        placeholder="Mesagge here..."
        value={data.mesagge}
        onChange={handleTextChange}
        className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white "
        ></textarea>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary "
          onClick={sendMesagge}
          >
            Send 
            </button>
        </div>
      </div>
    </div>
    </section>
  )
};

export default Contact;

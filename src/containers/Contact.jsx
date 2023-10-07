import React,{useState} from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { Leaf1, Leaf2 } from "../assets";
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import { Alert } from "./";
import {useTranslation } from 'react-i18next'

const Contact = () => {
const {t} = useTranslation()
const [data, setData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mesagge: "",
});

const [alert, setAlert] = useState({
  isAlert : false,
  mesagge : "",
  status : null,
})

const handleTextChange = (e)=>{
      const {name,value} = e.target
      // update the state for the corresponding input values 
      setData((prevData) =>({ ...prevData, [name]: value }));
}
const sendMesagge = async () => {
  if(data.email === "" || data.email === null){
    //throw and alert
    setAlert({
      isAlert : true, 
      mesagge : t('warningMesagge'), 
      status : "warning"
    });

    setInterval(() => {
      setAlert({
        isAlert : false, 
        mesagge : "", 
        status : null
      });
    }, 4000);
  }else{
    await addDoc(collection(db, "mesagges"), {...data}).then(()=>{
      //throw that alert mesagge
      setData({firstName : "", lastName : "", email : "", mesagge : ""})
      setAlert({
      isAlert : true, 
      mesagge : t('grMesagge'), 
      status : "succes"
    });

    setInterval(() => {
      setAlert({
        isAlert : false, 
        mesagge : "", 
        status : null
      });
    }, 4000);
    }).catch(err=>{
      //throw that alert 
      setAlert({
        isAlert : true, 
        mesagge : `Error : ${err.mesagge}`, 
        status : "danger"
      });
  
      setInterval(() => {
        setAlert({
          isAlert : false, 
          mesagge : "", 
          status : null
        });
      }, 4000);
    })
  }
} 

  return (
    <section 
    id="contact" 
    className="flex items-center justify-center flex-col gap-8 my-12 pl-7"
    >
    {/* Toast Alert notification */}
    <AnimatePresence>
    {alert.isAlert && (
      <Alert  status={alert.status} mesagge={alert.mesagge}/>
    )}
    </AnimatePresence>
    {/* title */}
    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
      initial={{opacity : 0, width: 0}} 
      animate={{opacity : 1, width: 200}} 
      exit={{opacity : 0, width: 0}} 
      transition={{delay: 0.3}}
      className="flex items-center justify-around w-52">
        <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf" />
        <p className="text-transparent text-center bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">{t('contact')}</p>
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
          placeholder={t('fName')} 
          value={data.firstName}
          onChange={handleTextChange}
          className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white " />
          <input 
          type="text" 
          name="lastName" 
          placeholder={t('lName')} 
          value={data.lastName}
          onChange={handleTextChange}
          className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white " />
        </div>
        {/* email field */}
        <input 
        type="email" 
        name="email"
        placeholder={t('eMail')}
        value={data.email}
        onChange={handleTextChange}
        className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white " />
        <textarea 
        name="mesagge" id="" cols="30" rows="10" 
        placeholder={t('mesagge')}
        value={data.mesagge}
        onChange={handleTextChange}
        className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white "
        ></textarea>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary "
          onClick={sendMesagge}
          >
            {t('send')} 
            </button>
        </div>
      </div>
    </div>
    </section>
  )
};

export default Contact;

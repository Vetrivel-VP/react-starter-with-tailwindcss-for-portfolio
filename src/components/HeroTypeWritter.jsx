import React, { useEffect, useState } from "react";


const HeroTypeWritter = ({words,speed}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(()=>{
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if(charIndex <= currentWord.length){
        setCurrentText(currentWord.slice(0, charIndex));
        charIndex++
      }else{
        // word type out, clear and move to the next word
        // 
        clearInterval(typingInterval);
        setTimeout(()=>{
          setCurrentWordIndex((prevIndex)=> prevIndex === words.length - 1 ? 0 : prevIndex + 1)
        }, 1000)
    }
    }, speed);

    return () => {
      clearInterval(typingInterval)
    }
  }, [currentWord, speed, words])
  return (
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-7">
      {currentText}
    </span>
  )
};

export default HeroTypeWritter;

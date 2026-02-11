import React from 'react'
import { valentineColors } from '../constants/colors';

interface NoteProp {
    text: string
};

const Note = ({text}: NoteProp) => {
    function getRandomValentineColor() {
        const values = Object.values(valentineColors);
        const index = Math.floor(Math.random() * values.length);
        return values[index];
    }
    
  return (
    <div style={{backgroundColor: getRandomValentineColor()}} className="flex justify-center items-center max-w-80 h-50 md:min-w-[5rem] md:min-h-[5rem] font-mono text-sm md:text-4xxl">
        {text}
    </div>
  )
}

export default Note;
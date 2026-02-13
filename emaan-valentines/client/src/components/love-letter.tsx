import React from 'react'
import { useState } from 'react'
import { valentineColors } from '../constants/colors'
const LoveLetter = () => {
    const [src, setSrc] = useState("dog-flower.jpg");

  return (
    <div style={{backgroundColor: valentineColors['strawberryMilkPink']}} className="py-5 flex items-center justify-center min-w-[2rem] min-h-[2rem] max-w-[70%]" >
        <div style={{backgroundColor: valentineColors['candyCream']}} className= "p-0.5 max-w-[90%] font-mono text-xs md:text-lg text-primary text-center leading-relaxed tracking-wider text-balance" >
            <p className="mb-5">
                Hi there fatty. This is Jam. It took me a while to create all of this so I hope you appreciate it. This is going to be our 3rd Valentine's day together! Can you believe it? We've spent alot of time together to know how to spend each Valentine's Day better than the last. I hope that our Valentine's day next year will be spent together too, regardless if it's in-person or through Facetime.
            </p>

            <p className="mb-5">
                We've gone through a lot of events this year. LSATs, graduation, moving to Seattle, etc. But most importantly, we grew another year together. I know that the upcoming year can bring a lot of twists and turns but I hope we can grow through this year together as well. 
            </p>

            <p>
                I remember one time you said that you're the only reason that we're still together. As much as I hate admitting it, you're right. You've put up with a lot of my BS, showing patience when patience was long past needing to be shown. I hope that despite all my silliness and stupidity, you can continue to put up with me, because I love you and I need you.
            </p>

            <p>
                Anyway, I won't ramble on for too long so this webpage doesn't run on for infinity. However there is something I still must ask since it's long overdue.
                <span className="mt-10 block">
                    Will you be my Valentine?
                </span>
            </p>

            <img className="inline w-15" src={src}/>

            <div className="mt-5">
                <button
                    style={{backgroundColor: valentineColors["mintHeart"]}}
                    className="px-4 py-2 border border-pink-500 rounded hover:bg-pink-100 mr-2"
                    onClick={() => setSrc("goofy.jpg")}
                >
                    J-JES!
                </button>

                                <button
                    style={{backgroundColor: valentineColors["pastelRed"]}}
                    className="px-4 py-2 border border-pink-500 rounded hover:bg-pink-100 ml-2"
                    onClick={() => setSrc("cat-soldier.jpeg")}
                >
                    no....
                </button>


            </div>
        </div>

    </div>
  )
}

export default LoveLetter
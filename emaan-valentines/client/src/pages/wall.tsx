import '../styles/App.css'
import { useEffect, useState } from 'react'
import { Header } from '../components/header'
import { FallingHearts } from '../components/falling-hearts'
import { PixelHeart } from '../components/pixel-heart'
import { Notes } from '../components/notes'
import { valentineColors } from '../constants/colors'
import CustomModal from '../components/modal'
import { backend_url } from '../constants/urls'

export function Wall() {
    const [auth, setAuth] = useState<boolean | null>(null);

    useEffect(() => {
    fetch(`${backend_url}/auth/verify`, {
        method: "GET",
        credentials: "include",
        body: JSON.stringify({token: localStorage.getItem('auth_token')})
    })
        .then(res => {console.log(res); setAuth(res.ok)})
        .catch(() => setAuth(false));
    }, []);

    if (auth === null) return (
        <div className="min-h-screen min-h-screen">
            <img src={"boiled_one.jpeg"}/>
            youre fat
        </div>
    );
    

    return (auth === true ? (
        <main className="relative min-h-screen py-10">
        <Header/>
        <FallingHearts/>
        <div className="relative min-h-screen flex flex-col z-10 justify-center items-center">  {/* everything on the page */}
            
            {/* header */}
            <h1 className="font-mono text-lg md:text-4xxl lg:text-5xl text-primary text-center leading-relaxed tracking-wider text-balance">
                {"Wall of Grievances"}
            </h1>

            {/* row of hearts */}
            <div className="flex items-center gap-3 mt-6 mb-6" aria-hidden="true">
                <PixelHeart size={16} color="hsl(330, 45%, 70%)" />
                <PixelHeart size={20} color="hsl(345, 80%, 55%)" />
                <PixelHeart size={24} color="hsl(0, 75%, 60%)" />
                <PixelHeart size={20} color="hsl(345, 80%, 55%)" />
                <PixelHeart size={16} color="hsl(330, 45%, 70%)" />
            </div>

            <CustomModal/>

            {/* subtitle + typewriter */}
            <div className="mt-10 min-h-[3rem]">
                {(
                <p className="font-sans text-xl md:text-3xl text-foreground text-center leading-relaxed">
                    Post here if you hate me 3:
                </p>
                )}
            </div>

            <Notes/>

        </div>
        </main>
  ) : (
    <div className="min-h-screen min-w-screen flex flex-col md:flex-row items-center justify-center">
        <p className="text-3xl text-red-800">
            YOU'RE NOT SUPPOSED TO BE HERE
        </p>
        <img className="w-[100%] md:w-[50%]" src={"boiled_one.jpeg"}/>
    </div>
  ))
}
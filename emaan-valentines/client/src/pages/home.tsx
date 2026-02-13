import '../styles/App.css'
import { useEffect, useState } from 'react'
import { Header } from '../components/header'
import { FallingHearts } from '../components/falling-hearts'
import { HeroSection } from '../components/hero-section'
import { CoupleScene } from '../components/couple-scene'
import LoveLetter from '../components/love-letter'
import { backend_url } from '../constants/urls'


export function Home() {
    const [auth, setAuth] = useState<boolean | null>(null);

    useEffect(() => {
    fetch(`${backend_url}/auth/verify`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({token: localStorage.getItem('auth_token')})
    })
        .then(res => {console.log(res); setAuth(res.ok)})
        .catch((err) =>{console.log("err: ", err); setAuth(false)});
    }, []);

    if (auth === null) return (
        <FallingHearts/>
    );

    return (
    auth === true ? (
        <main className="relative min-h-screen">
        <Header />
        <FallingHearts />
        <div className="relative z-10 flex justify-center items-center flex-col">
            <HeroSection />
            <CoupleScene />
            <LoveLetter/>
        </div>
        </main>
    ) :         
    <FallingHearts/>

    );

}
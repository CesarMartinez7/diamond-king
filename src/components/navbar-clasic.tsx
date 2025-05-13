"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedSubscribeButton } from "./animated-favorite-button";


const navItems = [
    {
      name: "Tienda ",
      link: "#features",
    },
    {
      name: "Sobre nosotros",
      link: "#pricing",
    },
    {
      name: "Carrito ",
      link: "#contact",
    },
  ];
export default function NavbarClassic() {

    const [isScrolledTop,setIsScrolledTop] = useState<boolean>(true)

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolledTop(window.scrollY === 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        // Llama inmediatamente para establecer el estado inicial
        handleScroll();
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


    return (
        <div className={`flex transition-all items-center duration-500 justify-between ${isScrolledTop ? "bg-black text-neutral-400" : " text-neutral-200 backdrop-blur-2xl transition-all shadow-2xl shadow-white/15"}  fixed w-full z-40 md:px-12 `}   >
            <div className="z-40">
                <Image src={"/dk.png"} alt="dsd" className="h-24 " width={100} height={20} />
            </div>
            <nav className="flex gap-6">
                {navItems.map((nav,idx) => (
                    <a key={idx} className="px-4">{nav.name}</a>
                ))}
            </nav>
            <div>
                <AnimatedSubscribeButton>
                    <span>Hola</span><span>Adios</span>
                </AnimatedSubscribeButton>
            </div>
        </div>
    )
}
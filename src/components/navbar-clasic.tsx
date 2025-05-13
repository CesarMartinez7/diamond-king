"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedSubscribeButton } from "./animated-favorite-button";
import { Icon } from "@iconify/react/dist/iconify.js";





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

    const [isScrolledTop, setIsScrolledTop] = useState<boolean>(true)
    // const [valueInput, setValueInput] = useState<string>('');
    // const [isOpenInput, setIsOpenIput] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolledTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={`flex flex-1 z-[999] transition-all items-center duration-500 justify-between ${isScrolledTop ? "bg-black text-neutral-400" : " text-neutral-200 backdrop-blur-xl transition-all shadow-2xl shadow-white/15"}  fixed w-full z-40 md:px-12 `}   >
            <div className="z-40">
                <Image src={"/dk.png"} alt="dsd" className="h-20 " width={100} height={20} />
            </div>
            <nav className="md:hidden lg:hidden xl:flex hidden gap-6 absolute top-1/2 left-1/2 m-0 -translate-y-1/2 -translate-x-1/2">
            <div className="bg-red-500 h-full w-2.5" ></div>
                {navItems.map((nav, idx) => (
                    <a key={idx} className="">{nav.name}</a>
                ))}
            </nav>

            <div className="flex flex-row gap-2  justify-center items-center">
                <div className="w-full max-w-sm min-w-[100px] rounded-md relative border border-[#2d2d2d] ">
                    <form >
                        <input type="text" className="w-full p-2 bg-transparent text-sm   rounded-md border-border transition duration-300 ease focus:outline-none shadow-sm focus:shadow" placeholder="Camiseta Premiun..." />
                    </form>


                </div>
                <AnimatedSubscribeButton className="bg-white text-black w-1.5">
                    <span><Icon icon="tabler:search" width="15" height="14" /></span><span>..</span>
                </AnimatedSubscribeButton>
            </div>
        </div>
    )
}
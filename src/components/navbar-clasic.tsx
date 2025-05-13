"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedSubscribeButton } from "./animated-favorite-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";





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
    
    const [isOpenSide, setIsOpenSide] = useState<boolean>(false)

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
        <div className="flex flex-col">
            <div className={`flex flex-1  z-50 transition-all items-center duration-500 justify-between ${isScrolledTop ? "bg-black text-neutral-400 border-primary-border" : "text-neutral-200 backdrop-blur-xl transition-all shadow-2xl shadow-white/15"} text-sm fixed w-full z-40 md:px-12 `}   >
                <Link href={"/"} className="z-40">
                    <Image src={"/dk.png"} alt="dsd" width={80} className="h-[70px]" height={12} />
                </Link>
                <nav className="md:hidden lg:hidden xl:flex hidden gap-6 absolute top-1/2 left-1/2 m-0 -translate-y-1/2 -translate-x-1/2">
                    <div className="bg-red-500 h-full w-2.5" ></div>
                    {navItems.map((nav, idx) => (
                        <Link className="cursor-pointer hover:bg-primary-hover transition-all duration-200 p-2 rounded-md" key={idx} href={nav.link} >{nav.name} </Link>
                    ))}
                </nav>

                <div className="flex flex-row gap-2  justify-center items-center">
                    <div className="w-full max-w-sm min-w-[100px] rounded-md relative border border-[#2d2d2d] ">
                        <form >
                            <input type="text" className="w-full p-2 bg-transparent text-sm   rounded-md border-border transition duration-300 ease focus:outline-none shadow-sm focus:shadow hover:scale-95" placeholder="Camiseta Premiun..." />
                        </form>
                    </div>
                    <AnimatedSubscribeButton className="bg-white text-black w-1.5">
                        <span><Icon icon="tabler:search" width="15" height="14" /></span><span>..</span>
                    </AnimatedSubscribeButton>
                    <AnimatedSubscribeButton onClick={() => setIsOpenSide(!isOpenSide)} className="bg-white text-black w-1.5 2xl:hidden xl:hidden lg:hidden">
                        <span><Icon icon="tabler:menu-2" width="14" height="14" /></span>
                        <span><Icon icon="tabler:x" width="16" height="16" /></span>
                    </AnimatedSubscribeButton>
                </div>
            </div>
            <div className={`bg-black/20 fixed z-50 shadow border border-primary-border rounded-md backdrop-blur-lg h-[50vh]  w-full ${isOpenSide ? "flex" : "hidden" } `}>
            <AnimatedSubscribeButton onClick={() => setIsOpenSide(!isOpenSide)} className="bg-white text-black w-1.5 2xl:hidden xl:hidden lg:hidden">
                        <span><Icon icon="tabler:menu-2" width="14" height="14" /></span>
                        <span><Icon icon="tabler:x" width="16" height="16" /></span>
                    </AnimatedSubscribeButton>
            </div>
        </div>
    )
}
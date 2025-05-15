"use client"
import Image from "next/image";
import { motion } from "motion/react"
import Link from "next/link";

interface CardProductProps {
    keyItem:  string;
    urlImage: string;
    altImage: string;
    classNameCard?: string
    name: string,
    navigateTo: string,
    price: string | number
    colors?: [string, string]
}

export default function CardProduct({ keyItem, classNameCard, altImage, urlImage, name, price, navigateTo = "/" }: CardProductProps) {
    return (
        <Link key={keyItem} className={` overflow-hidden ${classNameCard}`} href={navigateTo} >
            <div className="relative aspect-square">
                <Image
                    src={urlImage}
                    alt={altImage}
                    fill
                    className="object-cover transition-transform duration-300 "
                />
            </div>
            <div className="p-4">
                <motion.h3 className="font-medium text-xs md:text-sm truncate duration-300 text-primary-text"    >
                    {name}
                </motion.h3>
                <p className="text-white  text-xs"> € {price}</p>
            </div>
        </Link>
    )
}
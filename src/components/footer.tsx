"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Footer() {
  return (
    <footer>
      <footer className="border-t  mt-16 py-8 text-primary-text">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Logo */}
            <div className="w-16 h-16 relative">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Logo MARCA"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Nombre/Marca */}
            <div className="text-center">
              <h3 className="font-bold text-xl">MARCA</h3>
              <p className="text-sm  mt-1">Lorem ipsum dolor sit.</p>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="#" className="">
                <span className="sr-only">Facebook</span>
                <Icon icon="tabler:brand-facebook" width="24" height="24" />
              </Link>
              <Link href="#" className="">
                <span className="sr-only">Instagram</span>
                <Icon icon="tabler:brand-instagram" width="24" height="24" />
              </Link>
              <Link href="#" className="">
                <span className="sr-only">Twitter</span>
                <Icon
                  icon="tabler:brand-twitter-filled"
                  width="24"
                  height="24"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}

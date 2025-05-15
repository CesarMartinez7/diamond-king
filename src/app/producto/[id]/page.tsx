"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import ShinyText from "@/components/title";
import Whatsapp from "@/components/button-whats";
import CardProduct from "@/components/card-product";
import { AnimatedSubscribeButton } from "@/components/animated-favorite-button";
import { Accordion, AccordionItem } from "@heroui/accordion";

import { Meteors } from "@/components/meteors";
const imagesArray = [
  {
    name: "dsf",
    url: "/camiseta.jpg",
  },
  {
    name: "dsf",
    url: "/camiseta.jpg",
  },
  {
    name: "dsf",
    url: "/camiseta.jpg",
  },
  {
    name: "dsf",
    url: "/camiseta.jpg",
  },
  {
    name: "dsf",
    url: "/camiseta.jpg",
  },
];

export default function ProductoPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-primary-text  bg-black/[0.96] min-h-screen ">
       <Meteors />
      <Whatsapp />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  min-h-svh place-content-center">
        {/* Galería de imágenes */}
        <div className="space-y-4 ">
          <div className="relative aspect-square overflow-hidden   max-w-md mx-auto  w-full ">
            <Image
              src={"/camiseta.jpg"}
              alt="Camiseta de algodón"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex gap-2">
            {imagesArray.map((image, idx) => (
              <div
                key={idx}
                className="relative aspect-square cursor-pointer"
              >
                <div className="inset-0 absolute w-full h-full bg-gradient-to-t from-black/70 overflow-hidden to-transparent">

                </div>
                <Image
                  src={image.url}
                  alt={`Vista ${image.name}`}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-4">
          <div>
            <ShinyText
              className="lg:text-4xl text-2xl  "
              text="Camiseta de Algondo Premiun"
            ></ShinyText>
            
            <p className="text-2xl font-bold mt-2">€49,999 <span className="line-through text-xs text-current/50">€59,999</span></p>
          </div>

          <p className="text-sm md:text-base">
            Camiseta de algodón 100% orgánico, perfecta para cualquier ocasión.
            Diseño minimalista y corte moderno que se adapta a todos los
            estilos.
          </p>

          {/* Selección de color */}
          <div>
            <h3 className="font-medium mb-2 uppercase">Color</h3>
            <div className="flex space-x-2">
              {[
                "bg-black/20",
                "bg-white/10",
                "bg-blue-500/50",
                "bg-red-500",
              ].map((color, i) => (
                <button
                  key={i}
                  className={`w-8 h-8  ${color} ${i === 0 ? "ring-2 ring-black ring-offset-2" : ""
                    }`}
                  aria-label={`Color ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Selección de talla */}
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium uppercase">Talla</h3>
              <button className="text-sm underline">Guía de tallas</button>
            </div>
            <div className="flex gap-2  ">
              {["XS", "S", "M", "L", "XL"].map((size, i) => (
                <button
                  key={i}
                  className={`py-2 border text-xs border-primary-border hover:bg-primary-hover transition-colors   min-w-[48px] rorder-primary-border b rounded-2xl `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="grid grid-cols-2 gap-4">
            <button className="button-primary-dark border border-primary-border  shadow hover:shadow-black/10  text-md hover:scale-105 hover:rotate-1  bg-gradient-to-t from-black to-zinc-900 ">
              <Icon icon="tabler:building-store" width="24" height="24" />
              <span >Comprar</span>
            </button>
            
            <AnimatedSubscribeButton className="bg-white text-black font-light w-full">
              <span className="inline-flex gap-2 justify-center items-center font-light text-sm">
                <Icon icon="tabler:heart" width="20" height="20" />
                Añadir storage
              </span>
              <span>Eliminar storage</span>
            </AnimatedSubscribeButton>
          </div>
          <Accordion>
            <AccordionItem className="text-start text-pretty text-shiny  border-b border-primary-border" key="1" aria-label="Accordion 1" title="Descripcion">
            Esta camiseta de algodón premium está diseñada para ofrecer máxima comodidad y estilo ✨. El tejido de alta calidad garantiza durabilidad y una sensación suave al tacto 🚀. Perfecta para el uso diario o para ocasiones especiales ⭐.
            </AccordionItem>
            <AccordionItem key="2" className="border-b border-primary-border" aria-label="Accordion 2" title="Detalles">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur ipsa laborum obcaecati non cum fuga beatae error corporis assumenda!
            </AccordionItem>
            <AccordionItem className="border-b  border-primary-border" key="3" aria-label="Accordion 3" title="Envio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi!
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-10">
        <h2 className="text-2xl bg-gradient-to-r from-primary-text to-zinc-900 bg-clip-text text-transparent mb-4">También te puede gustar</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {imagesArray.map((i) => (
            <CardProduct navigateTo={i.url} key={crypto.randomUUID()} keyItem={crypto.randomUUID()} altImage={i.name} urlImage={i.url} name={i.name} price={i.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

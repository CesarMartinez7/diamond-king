"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import ShinyText from "@/components/title";
import PixelTransition from "@/components/PixelCard";
import Whatsapp from "@/components/button-whats";
import CardProduct from "@/components/card-product";
import { AnimatedSubscribeButton } from "@/components/animated-favorite-button";
import { Accordion, AccordionItem } from "@heroui/accordion";
const imagesArray = [
  {
    name: "dsf",
    url: "https://instagram.fbaq8-1.fna.fbcdn.net/v/t51.29350-15/434736273_930635801938057_3060979901925000806_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjk5OXg5NTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbaq8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QF-92ShGxfx-X9rRh9ZPzVWtLvfj8MHWnfVObujvDCSKcEq2XOVwWWz-zqyka3ZSaA&_nc_ohc=4nUpAhiJRJMQ7kNvwEdSVNv&_nc_gid=5ust_e4PFWPKgsfRhxy8Lg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzMzNTQwNzQzNzIxMjQyNzcxMg%3D%3D.3-ccb7-5&oh=00_AfLjxjxzsO-9e0CStaII9ovSUqI-XZQIT9ASzmRhE5vOrw&oe=6825A2CB&_nc_sid=22de04",
  },
  {
    name: "dsf",
    url: "https://instagram.fbaq8-1.fna.fbcdn.net/v/t51.29350-15/424474954_652605570220211_247089013268095546_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjk5OXg5NTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbaq8-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QF-92ShGxfx-X9rRh9ZPzVWtLvfj8MHWnfVObujvDCSKcEq2XOVwWWz-zqyka3ZSaA&_nc_ohc=l_qRQaqcb6UQ7kNvwFCWn8j&_nc_gid=5ust_e4PFWPKgsfRhxy8Lg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI5MzE3MDcwODY1NjQ2NDk4OA%3D%3D.3-ccb7-5&oh=00_AfK1FBbCe0Ce9og3EcSnukvTP9geXN7nC37rI3iCSgCzAA&oe=6825A70D&_nc_sid=22de04",
  },
  {
    name: "dsf",
    url: "https://instagram.fbaq8-1.fna.fbcdn.net/v/t51.29350-15/413897612_1151022506282416_6145356118645893511_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjk5OXg5NTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbaq8-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGCOg5PCm0CvE7HZDDq6P07BRtQhbsE2O5OpoSecHm5CQNmT7g8kHwnBZjCZey4O9A&_nc_ohc=1kF-Hp1kBpEQ7kNvwE75XvE&_nc_gid=t5VlVWZ8L01TpqXUZwM2oQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI2ODAzNzIwMjc1MTA1NTY5NA%3D%3D.3-ccb7-5&oh=00_AfJ13BbMCj9DI5vBwhxh02D0bGJ8G4nN77IIbkIWKErI1A&oe=6825C34A&_nc_sid=22de04",
  },
  {
    name: "dsf",
    url: "https://instagram.fbaq8-1.fna.fbcdn.net/v/t51.29350-15/403998994_753512583273722_711328907199420016_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbaq8-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHcO4jM7j-ufiSecw6Y_33GcKSQBDpNM6aQwZMpsxYEVb88ie61m6kXHmViGg4F8jQ&_nc_ohc=kELKnoDo4vMQ7kNvwGQat7y&_nc_gid=V7cs0o6iZIyIvk0s_KbAhQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI0MTcwODI2MjIzMDQ2OTE1NQ%3D%3D.3-ccb7-5&oh=00_AfJmFfEqeNWOzFodA3cueME94XJGeGLHw0YS5JhCjS7P_w&oe=6825ADDF&_nc_sid=22de04",
  },
];

export default function ProductoPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-[#AEAEAE] min-h-screen">
      <Whatsapp />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  min-h-svh place-content-center">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg  max-w-md mx-auto  w-full ">
            <PixelTransition
              firstContent={
                <Image
                  src={
                    "https://instagram.fbaq8-1.fna.fbcdn.net/v/t51.29350-15/467186037_573884575018318_8383155032773973803_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbaq8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QEbsYF7L3d71q-GUjbpA-UGsNtY00viTVGXnF929pK6stlbyiKRE6XYtsEnIg3MLB8&_nc_ohc=1S5CDsjBWyMQ7kNvwGuCDYu&_nc_gid=J7VvK_EnbKHxofDvbB8b9w&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUwMjY2MzgwMTcxMzg1MTEyMw%3D%3D.3-ccb7-5&oh=00_AfJqt6hRglaN5u2uLzNik1FQmJqcU669OvPX33xytYbx0g&oe=6825B089&_nc_sid=7a9f4b"
                  }
                  alt="Camiseta de algodón"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    className=""
                    style={{
                      fontWeight: 400,
                      fontSize: "2rem",
                      color: "#ffffff",
                    }}
                  >
                    Camiseta Premiun
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            {/* */}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {imagesArray.map((image, idx) => (
              <div
                key={idx}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-md"
              >
                <Image
                  src={image.url}
                  alt={`Vista ${image.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <ShinyText
              className="text-4xl "
              text="Camiseta de Algondo Premiun"
            ></ShinyText>
            <div className="flex items-center mt-2 space-x-2"></div>
            <p className="text-2xl font-bold mt-4">€49,999</p>
          </div>

          <p className=" text-sm">
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
                  className={`py-2 border  bg-[#171717] text-xs  min-w-[48px]  rounded-full border-[#737373] `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="grid grid-cols-2 gap-4">
            <button className=" bg-[#111111] border-[#303030] duration-200 hover:border-b-5 p-2 flex justify-center items-center rounded  border gap-2 ">
              <Icon icon="tabler:building-store" width="24" height="24" />
              <span className="shiny-text">Comprar</span>
            </button>
            <AnimatedSubscribeButton className="bg-white text-black font-light w-full">
              <span className="inline-flex gap-2 justify-center items-center font-light">
                <Icon icon="tabler:heart" width="20" height="20" />
                Añadir storage
              </span>
              <span>Eliminar storage</span>
            </AnimatedSubscribeButton>
          </div>
          <Accordion>
            <AccordionItem className="text-start text-sm border-b" key="1" aria-label="Accordion 1" title="Descripcion">
            Esta camiseta de algodón premium está diseñada para ofrecer máxima comodidad y estilo ✨. El tejido de alta calidad garantiza durabilidad y una sensación suave al tacto 🚀. Perfecta para el uso diario o para ocasiones especiales ⭐.
            </AccordionItem>
            <AccordionItem key="2" className="border-b text-sm" aria-label="Accordion 2" title="Detalles">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur ipsa laborum obcaecati non cum fuga beatae error corporis assumenda!
            </AccordionItem>
            <AccordionItem className="border-b text-sm" key="3" aria-label="Accordion 3" title="Envio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi!
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">También te puede gustar</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {imagesArray.map((i) => (
            <CardProduct key={crypto.randomUUID()} keyItem={crypto.randomUUID()} altImage={i.name} urlImage={i.url} name={i.name} price={i.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

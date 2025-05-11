"use client";
import ShinyText from "@/components/title";
import { ReviewComponents } from "@/components/review";
import PixelTransition from "@/components/PixelCard";

export default function ProductosPages() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <PixelTransition
          firstContent={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                Meow!1
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />


        <ReviewComponents
          items={testimonials} className=""/>
        <ShinyText text="Productos" speed={5} className="text-6xl font-bold" />
      </div>
      <div></div>
    </div>
  );
}



const testimonials = [
  {
    quote:
      "“¡Excelente servicio! El pedido llegó incluso antes de lo esperado y todo venía muy bien empacado. Sin duda volveré a comprar. ¡Recomendado al 100%!”",
    name: " Camila R.",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "“Buena calidad y variedad de productos. La atención al cliente fue rápida y resolvieron mi duda en minutos. Solo le bajo una estrella porque una prenda venía con la talla equivocada, pero la cambiaron sin problema.”",
    name: "Andrés M.",
    title: "Hamlet",
  },
  {
    quote: "“Me encantó la experiencia de compra. La web es muy intuitiva y encontré justo lo que buscaba. Además, tienen muchas promociones. ¡Ya tengo mi carrito lleno para la próxima compra!”",
    name: "Mariana L.",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "La entrega se demoró un poco más de lo prometido, pero los productos llegaron en buen estado. Podrían mejorar el seguimiento del envío.",
    name: "Julián V.",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "“Increíble. Pedí unos accesorios para el celular y llegaron impecables. Todo original y a muy buen precio. ¡Definitivamente volveré a comprar aquí!”",
    name: "Natalia G.",
    title: "Moby-Dick",
  },
];


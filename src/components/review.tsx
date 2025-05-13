"use client";

import { cn } from "./lib/utils";
import React, { useEffect, useState } from "react";

export const testimonials = [
  {
    quote:
      "“¡Excelente servicio! El pedido llegó incluso antes de lo esperado y todo venía muy bien empacado. Sin duda volveré a comprar. ¡Recomendado al 100%!”",
    name: " Camila R.",
    title: "Camiseta premiun",
  },
  {
    quote:
      "“Buena calidad y variedad de productos. La atención al cliente fue rápida y resolvieron mi duda en minutos. Solo le bajo una estrella porque una prenda venía con la talla equivocada, pero la cambiaron sin problema.”",
    name: "Andrés M.",
    title: "Camiseta premiun",
  },
  {
    quote:
      "“Me encantó la experiencia de compra. La web es muy intuitiva y encontré justo lo que buscaba. Además, tienen muchas promociones. ¡Ya tengo mi carrito lleno para la próxima compra!”",
    name: "Mariana L.",
    title: "Camiseta premiun",
  },
  {
    quote:
      "La entrega se demoró un poco más de lo prometido, pero los productos llegaron en buen estado. Podrían mejorar el seguimiento del envío.",
    name: "Julián V.",
    title: "Camiseta premiun",
  },
  {
    quote:
      "“Increíble. Pedí unos accesorios para el celular y llegaron impecables. Todo original y a muy buen precio. ¡Definitivamente volveré a comprar aquí!”",
    name: "Natalia G.",
    title: "Camiseta premiun",
  },
];

export const ReviewComponents = ({
  items = testimonials,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });

  
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-primary-border px-8 py-6 md:w-[450px]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20  leading-[1.6] font-light text-xs text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-white dark:">
                    {item.name}
                  </span>
                  <span className=" leading-[1.6] text-xs font-normal text-neutral-500 dark:">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

type CarouselItem = string | React.ReactNode;

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  showIndicators = true,
  showControls = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = (): void => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isPlaying && items.length > 1) {
      intervalId = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, currentIndex, interval, items.length]);

  if (items.length === 0) {
    return (
      <div className="w-full p-6 text-center text-red-600 border border-red-600 rounded-lg">
        No hay elementos para mostrar
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[100svh] overflow-hidden rounded-lg ${className}`}>
      {/* Controles de navegación */}
      {showControls && (
        <>
          <button 
            className="absolute  left-2 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all"
            onClick={prevSlide}
            aria-label="Anterior"
          >
            &#10094;
          </button>
          <button 
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-all"
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            &#10095;
          </button>
        </>
      )}
      
      {/* Slides */}
      <div className="flex transition-transform h-full duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div 
            className="w-full flex-shrink-0 h-full"
            key={index}
            aria-hidden={index !== currentIndex}
          >
            {typeof item === 'string' ? (
                <Image src={item} alt={`Slide ${index + 1}`} className='w-full h-full object-cover ' width={1500} height={1500} />
            //   <img 
            //     src={item} 
            //     alt={`Slide ${index + 1}`} 
            //     className="w-full h-full object-cover"
            //   />
            ) : (
              <div className="w-full">
                {item}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Indicadores */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Control de auto-play */}
      {autoPlay && items.length > 1 && (
        <button 
          className="absolute bottom-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-black/70 transition-all"
          onClick={toggleAutoPlay}
          aria-label={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
        >
          {isPlaying ? '⏸' : '⏵'}
        </button>
      )}
    </div>
  );
};

export default Carousel;
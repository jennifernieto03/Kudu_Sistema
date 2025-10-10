import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const slides = [
    { id: 1, text: "First slide", bg: "bg-gray-100" },
    { id: 2, text: "Second slide", bg: "bg-gray-200" },
    { id: 3, text: "Third slide", bg: "bg-gray-300" },
  ];

  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  // Función para ir a la siguiente slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Función para ir a la slide anterior
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay cada 3 segundos
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full min-h-96 overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex justify-center items-center w-full flex-shrink-0 h-96 ${slide.bg}`}
          >
            <span className="text-4xl text-gray-800">{slide.text}</span>
          </div>
        ))}
      </div>

      

      {/* Paginación */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-blue-700" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

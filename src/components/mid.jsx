// GridSection.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GridSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const gridRows = Array.from(
      new Set(cardsRef.current.map((card) => card.dataset.row))
    );

    gridRows.forEach((row) => {
      gsap.fromTo(
        cardsRef.current.filter((card) => card.dataset.row === row),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.row-${row}`,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const cardData = [
    { src: "/award.webp", title: "Recognition", desc: "AKQA wins Grand Clio for Design at the Clio Entertainment Awards", color: "bg-red-500", col: "sm:col-span-4", row: "1" },
    { src: "/JOURNEY.webp", title: "Journey", desc: "Exploring creative experiences", color: "bg-blue-500", col: "sm:col-span-2", row: "1" },
    { src: "/image3.webp", title: "Innovation", desc: "Transforming the digital landscape", color: "bg-green-500", col: "sm:col-span-2", row: "1" },
    { src: "/image4.webp", title: "Future", desc: "Designing the world of tomorrow", color: "bg-yellow-500", col: "sm:col-span-2", row: "2" },
    { src: "/image5.webp", title: "Creativity", desc: "Pushing the boundaries of design", color: "bg-purple-500", col: "sm:col-span-2", row: "2" },
    { src: "/image6.webp", title: "Technology", desc: "Innovating through digital experiences", color: "bg-pink-500", col: "sm:col-span-4", row: "2" },
    { src: "/image8.webp", title: "Impact", desc: "Creating meaningful change", color: "bg-orange-500", col: "sm:col-span-2", row: "3" },
    { src: "/image9.webp", title: "Growth", desc: "Expanding possibilities", color: "bg-teal-500", col: "sm:col-span-2", row: "3" },
    { src: "/image7.webp", title: "Collaboration", desc: "Working together for success", color: "bg-indigo-500", col: "sm:col-span-4", row: "3" },
    { src: "/image10.webp", title: "Passion", desc: "Driven by creativity and excellence", color: "bg-gray-500", col: "sm:col-span-2", row: "4" },
    { src: "/image11.webp", title: "Vision", desc: "Seeing beyond the horizon", color: "bg-lime-500", col: "sm:col-span-2", row: "4" },
    { src: "/image12.webp", title: "Strategy", desc: "Executing ideas with precision", color: "bg-cyan-500", col: "sm:col-span-4", row: "4" },
  ];

  return (
    <section className="p-4 sm:p-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4 sm:gap-8 h-auto">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            data-row={item.row}
            className={`row-${item.row} ${item.col} ${item.color} h-full overflow-hidden flex flex-col`}
          >
            <img
              src={item.src}
              loading="lazy"
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
            />
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-500 mt-2">{item.title}</p>
              <h3 className="text-lg font-semibold">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;

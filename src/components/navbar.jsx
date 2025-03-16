import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navbarRef.current) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          gsap.to(navbarRef.current, {
            y: "-100%",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(navbarRef.current, {
            y: "0%",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-700 flex items-center h-[88px] px-4 transition-transform"
    >
      <div className="max-w-[1440px] mx-auto flex w-full items-center justify-between md:px-20 lg:px-32 relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          <a href="/" className="block h-8 w-16">
            <img src="/svglogo.svg" alt="AKQA Logo" className="h-8 w-16" />
          </a>
        </div>
        <nav className="hidden md:flex justify-center items-center ml-auto">
          <ul className="flex space-x-8 text-sm tracking-tight">
            {["Work", "Expertise", "Careers", "Studios"].map((item) => (
              <li key={item}>
                <a
                  href={`/`}
                  className="text-gray-500 hover:text-black transition-colors duration-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

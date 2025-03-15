import React from "react";

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white text-gray-700 shadow-md transition-all duration-1000 flex items-center h-[88px] px-4">
        <div className="max-w-[1440px] mx-auto flex w-full items-center justify-between md:px-20 lg:px-32 relative">
          {/* Logo centered on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <a href="/" className="block h-8 w-16">
              <img src="/svglogo.svg" alt="AKQA Logo" className="h-8 w-16" />
            </a>
          </div>

          {/* Navigation (hidden on mobile) */}
          <nav className="hidden md:flex justify-center items-center ml-auto">
            <ul className="flex space-x-8 text-sm tracking-tight">
              <li>
                <a
                  href="/work/"
                  className="text-gray-500 transition-colors duration-700 hover:text-black"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/expertise/"
                  className="text-gray-500 transition-colors duration-700 hover:text-black"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="/careers/"
                  className="text-gray-500 transition-colors duration-700 hover:text-black"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/studios/"
                  className="text-gray-500 transition-colors duration-700 hover:text-black"
                >
                  Studios
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="w-full h-full mt-[88px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/Hero.mp4"
          className="w-full h-full object-cover"
        ></video>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-8 gap-4 sm:gap-8 p-4 sm:p-[80px] h-auto">
          {[
            {
              src: "/award.webp",
              title: "Recognition",
              desc: "AKQA wins Grand Clio for Design at the Clio Entertainment Awards",
              color: "bg-red-500",
              col: "sm:col-span-4",
              row: "sm:row-span-2",
            },
            {
              src: "/JOURNEY.webp",
              title: "Journey",
              desc: "Exploring creative experiences",
              color: "bg-blue-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:col-start-5",
            },
            {
              src: "/image3.webp",
              title: "Innovation",
              desc: "Transforming the digital landscape",
              color: "bg-green-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:col-start-7",
            },
            {
              src: "/image4.webp",
              title: "Future",
              desc: "Designing the world of tomorrow",
              color: "bg-yellow-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:row-start-3",
            },
            {
              src: "/image5.webp",
              title: "Creativity",
              desc: "Pushing the boundaries of design",
              color: "bg-purple-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:col-start-3 sm:row-start-3",
            },
            {
              src: "/image6.webp",
              title: "Technology",
              desc: "Innovating through digital experiences",
              color: "bg-pink-500",
              col: "sm:col-span-4",
              row: "sm:row-span-2 sm:col-start-5 sm:row-start-3",
            },
            {
              src: "/image8.webp",
              title: "Impact",
              desc: "Creating meaningful change",
              color: "bg-orange-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:col-start-5 sm:row-start-5",
            },
            {
              src: "/image9.webp",
              title: "Growth",
              desc: "Expanding possibilities",
              color: "bg-teal-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:col-start-7 sm:row-start-5",
            },
            {
              src: "/image7.webp",
              title: "Collaboration",
              desc: "Working together for success",
              color: "bg-indigo-500",
              col: "sm:col-span-4",
              row: "sm:row-span-2 sm:col-start-1 sm:row-start-5",
            },
            {
              src: "/image10.webp",
              title: "Passion",
              desc: "Driven by creativity and excellence",
              color: "bg-gray-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:row-start-7",
            },
            {
              src: "/image11.webp",
              title: "Vision",
              desc: "Seeing beyond the horizon",
              color: "bg-lime-500",
              col: "sm:col-span-2",
              row: "sm:row-span-2 sm:col-start-3 sm:row-start-7",
            },
            {
              src: "/image12.webp",
              title: "Strategy",
              desc: "Executing ideas with precision",
              color: "bg-cyan-500",
              col: "sm:col-span-4",
              row: "sm:row-span-2 sm:col-start-5 sm:row-start-7",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.col} ${item.row} ${item.color} h-full overflow-hidden flex flex-col`}
            >
              <img
                src={item.src}
                alt=""
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
    </>
  );
};

export default Header;

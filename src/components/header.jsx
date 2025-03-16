import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Video animation on mount
    gsap.fromTo(
      videoRef.current,
      { scale: 0.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power1.out" }
    );
  }, []);

  return (
    <section className="hero-video w-full h-full sm:h-dvh mt-[88px]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src="/Hero.mp4"
        className="w-full h-full object-cover"
      ></video>
    </section>
  );
};

export default Hero;

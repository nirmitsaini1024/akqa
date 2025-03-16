import { useState, useEffect } from "react";
import FooterSection from "./components/footer";
import Hero from "./components/header";
import GridSection from "./components/mid";
import Navbar from "./components/navbar";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-900 bg-opacity-90 backdrop-blur-md z-50">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>

            <div className="w-12 h-12 border-4 border-gradient-to-r from-blue-400 to-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <p className="mt-4 text-lg text-white font-semibold animate-pulse">
            Loading...
          </p>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <GridSection />
          <FooterSection />
        </>
      )}
    </>
  );
}

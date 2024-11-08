import { useState, useEffect } from "react";

import img1 from "../../assets/images/home1.jpg";
import img2 from "../../assets/images/home2.jpg";
import img3 from "../../assets/images/home3.jpg";
import img4 from "../../assets/images/home4.jpg";
import homS1 from "../../assets/images/mensClothing.webp";
import homS2 from "../../assets/images/homeS2.jpg";
import homS3 from "../../assets/images/homeS3.jpg";
import homS4 from "../../assets/images/homeS4.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const heroSlides = [
    {
      image: windowSize.width < 768 ? homS3 : img3,
      title: "Fall Trends",
      subtitle: "Discover the latest fashion trends",
      buttonText: "Shop Trends",
    },
    {
      image: windowSize.width < 768 ? homS4 : img4,
      title: "Winter Essentials",
      subtitle: "Stay cozy this season",
      buttonText: "Get Cozy",
    },
    {
      image: windowSize.width < 768 ? homS1 : img1,
      title: "Summer Collection 2024",
      subtitle: "Up to 50% off on selected items",
      buttonText: "Shop Summer",
    },
    {
      image: windowSize.width < 768 ? homS2 : img2,
      title: "New Arrivals",
      subtitle: "Check out our latest collection",
      buttonText: "Explore New",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 2200);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [heroSlides.length]);

  return (
    <div className="relative h-screen overflow-hidden perspective-2000 ">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 
            transition-all duration-1000 ease-out
            ${
              index === currentSlide
                ? "opacity-100 translate-x-0 rotate-y-0"
                : "opacity-0 translate-x-full rotate-y-90"
            }
          `}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div
              className={`
                relative z-10 
                transition-all duration-1000 delay-300
                ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >
              {/* Main Title with Animated Underline */}
              <h1 className="relative text-7xl font-bold text-gray-200 mb-6 tracking-tight">
                {slide.title}
                <span
                  className={`
                  absolute bottom-0 left-0 w-full h-1 bg-gray-200 transform origin-left
                  transition-transform duration-1000 delay-500
                  ${index === currentSlide ? "scale-x-100" : "scale-x-0"}
                `}
                ></span>
              </h1>

              {/* Subtitle with Fade In */}
              <p
                className={`
                text-2xl text-gray-200/90 mb-8 font-light tracking-wide
                transition-all duration-1000 delay-700
                ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
              >
                {slide.subtitle}
              </p>

              {/* Button with 3D Hover Effect */}
              <button
                className={`
                relative overflow-hidden
                px-8 py-3 bg-black text-white
                text-lg font-medium tracking-wide
                transform transition-all duration-300
                hover:scale-105 hover:shadow-xl
                before:absolute before:inset-0 before:bg-gray-200/10
                before:translate-x-[-100%] before:transition-transform before:duration-300
                hover:before:translate-x-0
                ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className={`
            absolute bottom-0 left-0 w-full h-32
            bg-gradient-to-t from-black/5 to-transparent
            transition-opacity duration-1000
            ${index === currentSlide ? "opacity-100" : "opacity-0"}
          `}
          />
        </div>
      ))}

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              transition-all duration-300 ease-out
              ${
                index === currentSlide
                  ? "w-12 h-2 bg-black"
                  : "w-2 h-2 bg-black/30 hover:bg-black/50"
              }
              rounded-full
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

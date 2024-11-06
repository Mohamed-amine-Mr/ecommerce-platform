import { useState, useEffect } from "react";
import img1 from "../../assets/images/home1.jpg";
import img2 from "../../assets/images/home2.jpg";
import img3 from "../../assets/images/home3.jpg";
import img4 from "../../assets/images/home4.jpg";
import homS1 from "../../assets/images/mensClothing.webp";
import homS2 from "../../assets/images/homeS2.jpg";
import homS3 from "../../assets/images/homeS3.jpg";
import homS4 from "../../assets/images/homeS4.jpg";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const heroSlides = [
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 2000);

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
    <div className="hero-container">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`hero-content ${index === currentSlide ? "active" : ""}`}
        >
          <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
          <p className="text-xl mb-8">{slide.subtitle}</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
            {slide.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hero;

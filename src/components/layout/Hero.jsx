// import img1 from "../../assets/images/mensClot";
import img1 from "../../assets/images/home2.jpg";

const Hero = () => {
  const heroSlides = [
    {
      image: img1,
      title: "Summer Collection 2024",
      subtitle: "Up to 50% off on selected items",
    },
    {
      image: img1,
      title: "New Arrivals",
      subtitle: "Check out our latest collection",
    },
  ];

  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src={heroSlides[0].image}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">{heroSlides[0].title}</h1>
          <p className="text-xl mb-8">{heroSlides[0].subtitle}</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

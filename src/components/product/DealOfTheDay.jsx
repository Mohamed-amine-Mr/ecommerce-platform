const DealOfTheDay = () => (
  <div className="bg-black text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Deal of the Day</h2>
          <p className="text-gray-300 mb-8">
            Get up to 70% off on our best-selling products. Limited time offer!
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DealOfTheDay;

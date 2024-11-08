const Newsletter = () => (
  <div className="bg-black py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-blue-100 mb-8">
        Get updates about new products and special offers
      </p>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 flex-wrap justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full"
          />
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;

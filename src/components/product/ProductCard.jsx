const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1">{product.rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

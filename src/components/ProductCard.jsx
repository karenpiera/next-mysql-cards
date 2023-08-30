/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:cursor-pointer hover:scale-105 transform transition-transform duration-300"
      href={`/products/${product.id}`}>
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
      />
      <h2 className="text-lg font-semibold text-white mb-2">{product.name}</h2>
      <p className="text-gray-400 mb-2">
        {product.model} - {product.year}
      </p>
      <p className="text-gray-400 mb-4">
        {product.type} - {product.capacity}
      </p>
      <p className="text-gray-300">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-green-500 font-semibold">${product.price}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
          Rentar
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;

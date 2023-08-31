/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Buttons from "./Buttons";

async function loadProduct(productId) {
  const { data } = await axios.get(
    process.env.BASE_URL + "/api/products/" + productId
  );
  return data;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Detalles del Producto</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg">
            <span className="font-semibold">Marca:</span> {product.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Modelo:</span> {product.model}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Año:</span> {product.year}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Tipo:</span> {product.type}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Capacidad:</span> {product.capacity}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Transmisión:</span>{" "}
            {product.transmission}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Precio:</span> {product.price}
          </p>
        </div>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <p className="text-lg mt-4">
        <span className="font-semibold">Descripción:</span>{" "}
        {product.description}
      </p>
      <Buttons productId={product.id} />
    </div>
  );
}

export default ProductPage;

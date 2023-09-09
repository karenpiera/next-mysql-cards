/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    model: "",
    year: "",
    type: "",
    capacity: "",
    transmission: "",
    description: "",
    price: "",
    image: "",
  });

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (params.id) {
      axios.get("/api/products/" + params.id).then((res) => {
        setProduct({
          name: res.data.name,
          model: res.data.model,
          year: res.data.year,
          type: res.data.type,
          capacity: res.data.capacity,
          transmission: res.data.transmission,
          description: res.data.description,
          price: res.data.price,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const res = await axios.post("/api/products", product);
    } else {
      const res = await axios.put("/api/products/" + params.id, product);
    }
    form.current.reset();
    router.refresh();
    router.push("/products");
  };

  return (
    <form
      className="bg-white shadow-md rounded-md px-8 pt-4 pb-4 mb-4"
      onSubmit={handleSubmit}
      ref={form}>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2">
            Marca
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter product marca"
            onChange={handleChange}
            value={product.name}
            className="shadow appearance-none border rounded w-full py-2 px-3"
            autoFocus
          />
        </div>
        <div>
          <label
            htmlFor="model"
            className="block text-gray-700 text-sm font-bold mb-2">
            Product Model
          </label>
          <input
            name="model"
            type="text"
            placeholder="Enter product model"
            onChange={handleChange}
            value={product.model}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="year"
            className="block text-gray-700 text-sm font-bold mb-2">
            Year
          </label>
          <input
            name="year"
            type="text"
            placeholder="Enter year"
            onChange={handleChange}
            value={product.year}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-gray-700 text-sm font-bold mb-2">
            Type
          </label>
          <input
            name="type"
            type="text"
            placeholder="Enter product type"
            onChange={handleChange}
            value={product.type}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="capacity"
            className="block text-gray-700 text-sm font-bold mb-2">
            Capacity
          </label>
          <input
            name="capacity"
            type="text"
            placeholder="Enter capacity"
            onChange={handleChange}
            value={product.capacity}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="transmission"
            className="block text-gray-700 text-sm font-bold mb-2">
            Transmission
          </label>
          <input
            name="transmission"
            type="text"
            placeholder="Enter transmission"
            onChange={handleChange}
            value={product.transmission}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Enter description"
            onChange={handleChange}
            value={product.description}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            name="price"
            type="text"
            placeholder="00.00"
            onChange={handleChange}
            value={product.price}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            name="image"
            type="text"
            placeholder="Enter image URL"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          {params.id ? "Update Product" : "Create Product"}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;

// import { conn } from "@/libs/mysql"
import ProductCard from "@/components/ProductCard";
import axios from "axios";

async function loadProducts() {
  const { data } = await axios.get(process.env.BASE_URL + "/api/products");
  return data;
  // const result=await conn.query('SELECT * FROM product')
  // console.log(result);
}

async function ProductPage() {
  const products = await loadProducts();
  return (
    <div className="bg-gray-400 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

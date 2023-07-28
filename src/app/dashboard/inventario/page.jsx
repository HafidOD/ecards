import ProductCard from "@/components/ProductCard";
import { PrinterIcon, TruckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export async function fetchProducts () {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();

  return data.products;
}

export default async function pageInventarios() {
   const products = await fetchProducts();
  // console.log(products);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-center text-blue-700">
            Selecciona los productos
          </h3>

          <ProductCard products={ products }></ProductCard>
          <div className="flex justify-center p-4">
            <a
              href="/dashboard/checkout"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver Carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

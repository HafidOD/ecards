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
    <div className="flex flex-col items-center justify-center h-96">
      <div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-center text-blue-700">
            Selecciona los productos
          </h3>

          <ProductCard products={ products }></ProductCard>
        </div>
      </div>
    </div>
  );
}

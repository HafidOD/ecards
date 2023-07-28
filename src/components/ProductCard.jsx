"use client";

import Image from "next/image";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ButtonProduct from "./ButtonProduct";

export default function ProductCard({ products }) {
  const [counter, setCounter] = useState(0);
  const plusCounter = () => {
    setCounter(counter + 1);
  };
  const minusCounter = () => {
    // Counter state is decremented
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  const addToCard = () => {
    alert(`Se ha agregado al carrito ${counter}`);
  };

  return (
    <div>
      {/* <p>enterprise id = { enterprise }</p> */}
      {products.map((product) => {
        return (
          <div key={product.id} className="w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg m-3 bg-white">
            <img
              className="object-cover w-40 h-40"
              src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
              alt="image"
            />
            {/* <Image
        className="object-cover w-full"
        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
        alt="Logo Grupo Regio"
        width={40}
        height={40}
      /> */}
            <div className="pl-4 flex flex-col justify-evenly">
              <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                {product.nameProduct}
              </h4>
              <p className="mb-2 text-sm text-gray-500 leading-normal">
                {product.unitsPackage} piezas por paquete
              </p>
              <p className="mb-2 text-sm text-gray-500 leading-normal">
                ${product.priceLocal}.00 MXN
              </p>
            </div>
            <ButtonProduct></ButtonProduct>
          </div>
        );
      })}
    </div>
  );
}

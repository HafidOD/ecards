"use client";

import Image from "next/image";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ButtonProduct() {
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
    <div className="pl-3 flex flex-col justify-center">
      <div className="flex">
        <button className="text-sm text-blue-700">
          <MinusCircleIcon
            className="h-6 w-6 "
            aria-hidden="true"
            onClick={minusCounter}
          />
        </button>
        <div>
          <input
            type="number"
            className="w-12 px-4 py-2 md:py-4 outline-none"
            value={counter}
            readOnly
          />
        </div>
        <button className="text-sm text-blue-700">
          <PlusCircleIcon
            className="h-6 w-6"
            aria-hidden="true"
            onClick={plusCounter}
          />
        </button>
      </div>
      <div className="pt-2 md:pt-4 w-full flex justify-center">
        <button
          className="px-4 py-2 text-xs md:text-sm text-blue-100 bg-blue-700 rounded shadow"
          onClick={addToCard}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

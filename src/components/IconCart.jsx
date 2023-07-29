import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function IconCart() {
  return (
    
    <Link href="/dashboard/checkout" className="ml-4 flow-root lg:ml-6 bg-white rounded-full px-3 py-1">
      <div  className="group flex items-center">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-blue-700"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-blue-700">
        2
      </span>
      <span className="sr-only">Ir al carrito</span>
      </div>
    </Link>
  );
}

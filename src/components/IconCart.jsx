import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function IconCart() {
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <div className="group -m-2 flex items-center p-2">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-white"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-white">
        2
      </span>
      <span className="sr-only">items in cart, view bag</span>
      </div>
    </div>
  );
}

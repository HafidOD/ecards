import ButtonCheckout from "./ButtonCheckout";


export default function ProductCheckout({ products }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.map((product) => (
        <li key={product.id} className="flex justify-between items-center gap-x-6 py-2">

          <div className="flex items-center gap-x-4">
          <img className="object-contain h-12 w-12 flex-none rounded-full" src={product.imageProduct} alt={product.nameProduct} />
            <div className="min-w-0 flex-auto">
              <p className="text-xs md:text-sm font-semibold leading-6 text-gray-900">{product.nameProduct}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">${product.priceLocal} MXN</p>
            </div>
          </div>
          <div className="justify-center sm:flex sm:flex-col sm:items-end ">
            <div className="flex">
            <ButtonCheckout></ButtonCheckout>
            <div className="flex justify-center items-center ml-3"><p className="text-xs md:text-sm">$228.00</p></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

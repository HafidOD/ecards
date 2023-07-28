import ButtonCheckout from "./ButtonCheckout";


export default function ProductCheckout({ products }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.map((product) => (
        <li key={product.id} className="flex justify-between items-center gap-x-6 py-3">

          <div className="flex gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={product.imageProduct} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{product.productName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">${product.priceLocal} MXN</p>
            </div>
          </div>
          <div className="justify-center sm:flex sm:flex-col sm:items-end ">
            <div className="flex">
            <ButtonCheckout></ButtonCheckout>
            <div className="flex justify-center items-center ml-3">$228.00</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

import ProductCheckout from "@/components/ProductCheckout";

const products = [
  {
    id: 1,
    productName: "Producto 1",
    imageProduct: "https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg",
    priceLocal: 114,
    quantity: 2,
  },
  {
    id: 2,
    productName: "Producto 2",
    imageProduct: "https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg",
    priceLocal: 120,
    quantity: 5,
  },
]

export default async function CheckoutPage() {
  return (
    <div className="w-full md:w-2/5 px-2 m-auto py-5 space-y-5 sm:px-0">

      <div>Resumen de compra</div>
      <div className="rounded-lg shadow-lg mt-5 bg-white p-4">
        <ProductCheckout products={products}></ProductCheckout>
        <div className="border-t-2 border-t-gray-200 pt-2">
          <p className="text-end">Total: $800.00</p>
        </div>
      </div>
      <div className="flex justify-center">
            <a
              href="#"
              className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Actualizar carrito
            </a>
          </div>
      <div className="flex justify-center">
            <a
              href="/dashboard/direccion"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Seleccionar dirección
            </a>
          </div>
    </div>
  )
}

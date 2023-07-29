import ProductCheckout from "@/components/ProductCheckout";
import Link from "next/link";

const products = [
  {
    "id": 1,
    "nameProduct": "Advance Check-In Card_ESLA",
    "imageProduct": "/images/products/gm_note_card_envelope.png",
    "priceLocal": 110,
    "priceNacional": 116.6,
    "priceExt": 5.79,
    "descriptionProduct": null,
    "stockProduct": 200,
    "unitsPackage": 100,
    "published": true,
    "enterpriseId": 3,
    "createdAt": "2023-07-27T21:51:34.132Z",
    "updatedAt": "2023-07-27T21:51:34.132Z",
    "enterprise": {
      "id": 3,
      "enterpriseName": "Marriott",
      "logo": "/images/enterprises/logos/mh.jpg",
      "createdAt": "2023-07-27T21:48:15.821Z",
      "updatedAt": "2023-07-27T21:48:15.821Z"
    },
    "categories": [
      {
        "id": 1,
        "categoryName": "Stationery",
        "imageCategory": "/images/logos/gruporegio_isotipo.png",
        "createdAt": "2023-07-27T21:46:56.595Z",
        "updatedAt": "2023-07-27T21:46:56.595Z"
      }
    ]
  },
  {
    "id": 2,
    "nameProduct": "Member Non Member Key Packet_ESLA_STAN_R2-2",
    "imageProduct": "/images/products/coaster.png",
    "priceLocal": 114,
    "priceNacional": 121,
    "priceExt": 6,
    "descriptionProduct": null,
    "stockProduct": 200,
    "unitsPackage": 100,
    "published": true,
    "enterpriseId": 3,
    "createdAt": "2023-07-27T21:52:49.281Z",
    "updatedAt": "2023-07-27T21:52:49.281Z",
    "enterprise": {
      "id": 3,
      "enterpriseName": "Marriott",
      "logo": "/images/enterprises/logos/mh.jpg",
      "createdAt": "2023-07-27T21:48:15.821Z",
      "updatedAt": "2023-07-27T21:48:15.821Z"
    },
    "categories": [
      {
        "id": 1,
        "categoryName": "Stationery",
        "imageCategory": "/images/logos/gruporegio_isotipo.png",
        "createdAt": "2023-07-27T21:46:56.595Z",
        "updatedAt": "2023-07-27T21:46:56.595Z"
      }
    ]
  }
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
            <Link
              href="/dashboard/direccion"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Seleccionar dirección
            </Link>
          </div>
    </div>
  )
}

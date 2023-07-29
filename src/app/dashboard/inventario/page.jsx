import ProductCard from "@/components/ProductCard";
import { PrinterIcon, TruckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// export async function fetchProducts () {
//   const res = await fetch('/api/products');
//   const data = await res.json();

//   return data.products;
// }
const products = [
  {
    "id": 1,
    "nameProduct": "Advance Check-In Card_ESLA",
    "imageProduct": "https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg",
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
    "imageProduct": "https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg",
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
export default async function pageInventarios() {
  //  const products = await fetchProducts();
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

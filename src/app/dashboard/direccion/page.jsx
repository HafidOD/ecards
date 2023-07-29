import AddressCard from "@/components/AddressCard";

export async function fetchAddresses () {
  const res = await fetch(process.env.HOST+'/api/addresses');
  const data = await res.json();

  return data.addresses;
}

export default async function AddressPage() {
  const addresses = await fetchAddresses();
  // console.log(addresses);
  return (
    <div className="w-full md:w-2/5 px-2 m-auto py-5 space-y-5 sm:px-0">

      <div>page seleccion de direcciones</div>
      <div className="rounded-lg shadow-lg mt-5 bg-white">
        <AddressCard addresses={addresses}></AddressCard>
      </div>
      <div className="flex justify-center">
            <a
              href="/dashboard/thankyou"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Finalizar pedido
            </a>
          </div>
    </div>
  )
}

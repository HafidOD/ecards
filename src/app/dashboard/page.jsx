
import Enterpises from "@/components/Enterpises";

export async function fetchEnterprises() {
const URL_BASE = process.env.URL_BASE +'/api/enterprises';
  const res = await fetch(URL_BASE);
  const data = await res.json();
  // console.log(data.enterprises);
  return data.enterprises;
}
export default async function DashboardPage() {
  const enterprises = await fetchEnterprises();
  return (
    <div className="w-3/5 px-2 m-auto py-16 sm:px-0">
      <Enterpises enterprises={ enterprises }></Enterpises>
    </div>
  )
}

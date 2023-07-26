
import Enterpises from "@/components/Enterpises";

export async function fetchEnterprises() {

  const res = await fetch('http://localhost:3000/api/enterprises');
  const data = await res.json();
  return data.data;
}
export default async function DashboardPage() {
  const enterprises = await fetchEnterprises();
  return (
    <div className="w-3/5 px-2 m-auto py-16 sm:px-0">
      <Enterpises enterprises={ enterprises }></Enterpises>
    </div>
  )
}

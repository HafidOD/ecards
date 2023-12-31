import Enterpises from "@/components/Enterpises";

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUser(id) {
  const res = await fetch(`${URL}/users/${id}`);
  const user = await res.json();
  // console.log(user);
  return user;
}

export default async function DashboardPage() {
  const user = await fetchUser(10);
  console.log(user);
  return (
    <div className="w-3/5 px-2 m-auto py-16 sm:px-0">
      <Enterpises enterprises={user.data.enterprises}></Enterpises>
    </div>
  );
}

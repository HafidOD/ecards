import Enterpises from "@/components/Enterpises";

const URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUser(id) {
  const res = await fetch(`${URL}/users/${id}`);
  const user = await res.json();
  // console.log(user);
  return user;
}
// const enterprises = [
//   {
//     "id": 1,
//     "enterpriseName": "Bonvoy",
//     "logo": "/images/enterprises/logos/bonvoy.jpg",
//     "createdAt": "2023-07-27T21:47:55.363Z",
//     "updatedAt": "2023-07-27T21:47:55.363Z",
//     "addresses": [

//     ],
//     "users": [
//       {
//         "id": 1,
//         "email": "hola@mundo.com",
//         "password": "holamundo1",
//         "userName": "Hafid",
//         "role": "USER",
//         "createdAt": "2023-07-27T21:49:44.619Z",
//         "updatedAt": "2023-07-27T21:49:44.619Z"
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "enterpriseName": "City Express",
//     "logo": "/images/enterprises/logos/city-express.jpg",
//     "createdAt": "2023-07-27T21:48:10.129Z",
//     "updatedAt": "2023-07-27T21:48:10.129Z",
//     "addresses": [
//       {
//         "id": 1,
//         "officeName": "City Express Junior Aguascalientes Centro",
//         "address": "Av. Ayuntamiento 102, Obraje.",
//         "city": "Aguascalientes",
//         "country": "México",
//         "state": "Aguascalientes",
//         "postalCode": 20230,
//         "enterpriseId": 2,
//         "createdAt": "2023-07-27T21:48:27.329Z",
//         "updatedAt": "2023-07-27T21:48:27.329Z"
//       }
//     ],
//     "users": [
//       {
//         "id": 1,
//         "email": "hola@mundo.com",
//         "password": "holamundo1",
//         "userName": "Hafid",
//         "role": "USER",
//         "createdAt": "2023-07-27T21:49:44.619Z",
//         "updatedAt": "2023-07-27T21:49:44.619Z"
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "enterpriseName": "Marriott",
//     "logo": "/images/enterprises/logos/marriott.jpg",
//     "createdAt": "2023-07-27T21:48:15.821Z",
//     "updatedAt": "2023-07-27T21:48:15.821Z",
//     "addresses": [

//     ],
//     "users": [

//     ]
//   }
// ]
export default async function DashboardPage() {
  const user = await fetchUser(1);
  // console.log(user);
  return (
    <div className="w-3/5 px-2 m-auto py-16 sm:px-0">
      <Enterpises enterprises={user.data.enterprises}></Enterpises>
    </div>
  );
}

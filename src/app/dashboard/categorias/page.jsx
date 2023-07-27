
import Categories from "@/components/Categories";
import Enterpises from "@/components/Enterpises";

export async function fetchCategories() {

  const res = await fetch('http://localhost:3000/api/categories');
  const data = await res.json();
  // console.log(data.enterprises);
  return data.categories;
}
export default async function CategoriesPage() {
  const categories = await fetchCategories();
  // console.log(categories);
  return (
    <div className="w-3/5 px-2 m-auto py-16 sm:px-0">
      <Categories categories={categories}></Categories>
    </div>
  )
}

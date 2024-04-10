import { useEffect, useState } from "react";
import { Star } from "./star";


export function Product({ min, max, starsFilter, categoryFilter, search, findFilter, productsCopy, filter }) {


  // const [posts, setPosts] = useState([]);
  // const [filteredPosts, setFilteredPosts] = useState([])
  // const [filteredCategory, setFilteredCategory] = useState([])
  // const [filterSearch, setFilterSearch] = useState([])
  // const [filterFind ,setFilterFind] = useState([])

  // useEffect(()=>{
  //   setPosts(products)
  // },[products])
  // useEffect(() => {
  //   if (starsFilter !== null) {
  //     setFilteredPosts(posts.filter(o => o.rating.rate >= starsFilter))

  //   } else {
  //     setFilteredPosts(posts)




  //   }
  // }, [starsFilter, posts])

  // useEffect(() => {
  //   if (categoryFilter == "men's clothing") {
  //     setFilteredCategory(filteredPosts.filter(c => c.category == "men's clothing"))

  //   }
  //   else if (categoryFilter == "jewelery") {
  //     setFilteredCategory(filteredPosts.filter(c => c.category == "jewelery"))

  //   }
  //   else if (categoryFilter == "women's clothing") {
  //     setFilteredCategory(filteredPosts.filter(c => c.category == "women's clothing"))

  //   }
  //   else if (categoryFilter == "electronics") {
  //     setFilteredCategory(filteredPosts.filter(c => c.category == "electronics"))

  //   }
  //   else {
  //     setFilteredCategory(filteredPosts)

  //   }
  // }, [categoryFilter, filteredCategory, filteredPosts])


  // useEffect(()=>{
  //   if(search == ""){
  //     setFilterSearch(filteredCategory)
  //   }
  //   else if(search != ""){
  //     setFilterSearch(filteredCategory.filter((x) => x.title.toLowerCase().includes(search.toLowerCase())))
  //   }
  // },[search,filteredCategory])

  // useEffect(()=>{

  //   if(findFilter == ""){
  //     setFilterFind(filterSearch)
  //   }
  //   else if(findFilter != ""){
  //     setFilterFind(filterSearch.filter((y) => y.category.toLowerCase().includes(findFilter.toLowerCase())))
  //   }
  // },[filterSearch, findFilter])







  const p = []
  for (const product of productsCopy) {
    p.push(<div
      key={product.id}
      className="card w-[350px] h[550px] my-5 md:mr-5 bg-base-100 hover:shadow-2xl "
    >
      <div className="text-end  p-5">
        <i className="fa-regular fa-heart text-red-500 fa-lg cursor-pointer"></i>
      </div>
      <figure>
        <img
          className="w-[200px] h-[200px]  items-center"
          src={product.image}
          alt={product.name}
        />
      </figure>
      <div className="card-body px-6 ">
        <h2 className="card-title items-center ">{product.title}</h2>

        <Star stars={product.rating.rate} rev={product.rating.count} />

        <div>
          <p className="text-sm text-slate-400 mt-1">
            <b>category:</b> {product.category}
          </p>
        </div>

        <div className="card-actions items-center mt-2  justify-end">
          <p className="text-3xl font-bold ">
            {product.price}${" "}
            <sup className="text-sm font-extralight">99</sup>
          </p>
          <button className="btn btn-outline btn-blue-600 rounded-3xl hover:bg-blue-800 border-blue-600">
            See Detail
          </button>
        </div>
      </div>
    </div>)
  }






  return (
    <>
      {p}
    </>
  );
}

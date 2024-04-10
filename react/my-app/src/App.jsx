import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Section } from "./section";
import { SideBar } from "./sidebar";
import { Section2 } from "./section2";
import { Product } from "./product";

function App() {
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(500);
  // const [starsFilter, setStarsFilter] = useState(null);
  // const [filterCategory, setFilterCategory] = useState("All")
  // const [findFilter,setFindFilter]=useState("")
  // const [search, setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [filter, setFilter] = useState({ stars: null, category: null });
  //-----------------------------------------------------
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {setProducts(json) ; setProductsCopy(json)})
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  

  function changeStar(selectedStar) {
    setFilter((f) => ({ stars: selectedStar, category: f.category }));
  }

  useEffect(() => {
    if (filter.stars !== null) {
      setProductsCopy(p => p.filter((p) => p.rating.rate >= filter.stars));
    } else {
      setProductsCopy(products)
    }

  }, [filter, products]);

  // set filter stars
  // unset filter stars

  useEffect(() => {
    // setMin(xxx)
    // setMin(xxx)
  }, [products])

  // useEffect(() => {
  //   if (starsFilter !== null) {
  //     setFilter(products.filter(o => o.rating.rate >= starsFilter))

  //   } else {
  //     setFilter(products)
  //   }
  //   if(filter == "men's clothing"){
  //     setFilter(products.filter(c => c.category == "men's clothing"))
  //   }

  // }, [starsFilter, products, filter])

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
  return (
    <div>
      {/* <Navbar setSearch={setSearch} /> */}
      <Section />

      <div className="flex bg-slate-300">
        <SideBar
          // setMin={setMinValue}
          // setMax={setMaxValue}
          // min={minValue}
          // max={maxValue}
          // setStarsFilter={setStarsFilter}
          // setFilterCategory={setFilterCategory}
          // setFindfilter={setFindFilter}
          filter={filter}
          setFilter={setFilter}
          products={products}
        
        />
        <div className=" w-full overflow-auto">
          <Section2 />
          <div className="flex flex-wrap my-6 mx-16 items-center content-center justify-center lg:justify-start">
            <Product productsCopy={productsCopy} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Section } from "./section";
import { SideBar } from "./sidebar";
import { Section2 } from "./section2";
import { Product } from "./product";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [selectedMin, setSelectedMin] = useState(0);
  const [selectedMax, setSelectedMax] = useState(0);
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [filter, setFilter] = useState({ stars: null, category: null });
  //-----------------------------------------------------
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function setStars(selectedStar) {
    setFilter((f) => ({ stars: selectedStar, category: f.category }));
  }
  function setCategory(selectedCategory) {
    setFilter((f) => ({ stars: f.stars, category: selectedCategory }));
  }

  useEffect(() => {
    if (filter.stars !== null) {
      setProductsCopy((p) => p.filter((p) => p.rating.rate >= filter.stars));
    } else {
      setProductsCopy(products);
    }
     if (filter.category == "men's clothing") {
      setProductsCopy((p) => p.filter((p) => p.category == "men's clothing" ));
    } else if (filter.category == "women's clothing") {
      setProductsCopy((p) => p.filter((p) => p.category == "women's clothing"));
    } else if (filter.category == "jewelery") {
      setProductsCopy((p) => p.filter((p) => p.category == "jewelery"));
    } else if (filter.category == "electronics") {
      setProductsCopy((p) => p.filter((p) => p.category == "electronics"));
    } else if (filter.category == null){
      setProductsCopy((p) => p.filter((p) => p.category));
    }
  }, [filter, products]);



  useEffect(() => {
    setMinValue(Math.min(...productsCopy.map(p => p.price)))
    setMaxValue(Math.max(...productsCopy.map(p => p.price)))
  },[productsCopy])


  return (
    <div>
      <Navbar />
      <Section />

      <div className="flex bg-slate-300">
        <SideBar
          setMin={setMinValue}
          setMax={setMaxValue}
          min={minValue}
          max={maxValue}
          selectedMin={selectedMin}
          setSelectedMin={setSelectedMin}
          selectedMax={selectedMax}
          setSelectedMax={setSelectedMax}
          filter={filter}
          setFilter={setFilter}
          products={products}
          setStars={setStars}
          setCategory={setCategory}
        />
        <div className=" w-full overflow-auto">
          <Section2 />
          <div className="flex flex-wrap my-6 mx-16 items-center content-center justify-center lg:justify-start">
            <Product
              productsCopy={productsCopy}
              setProductCopy={setProductsCopy}
              selectedMin={selectedMin}
              selectedMax={selectedMax}
              products={products}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

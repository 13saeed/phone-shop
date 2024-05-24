import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { SideBar } from "./sidebar";
import { Section2 } from "./section2";
import { Product } from "./product";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [selectedMin, setSelectedMin] = useState(0);
  const [selectedMax, setSelectedMax] = useState(0);
  const [showSidbar, setShowSidbar] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
  const [changeview, setChangeView] = useState(true);
  const [filter, setFilter] = useState({
    stars: null,
    category: null,
    search: null,
    findFilter: null,
    highprice: null,
  });

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
    setFilter((f) => ({
      stars: selectedStar,
      category: f.category,
      search: f.search,
      findFilter: f.findFilter,
      highprice: f.highprice,
    }));
  }
  function setCategory(selectedCategory) {
    setFilter((f) => ({
      stars: f.stars,
      category: selectedCategory,
      search: f.search,
      findFilter: f.findFilter,
      highprice: f.highprice,
    }));
  }
  function setSearch(selectedSearch) {
    setFilter((f) => ({
      stars: f.stars,
      category: f.category,
      search: selectedSearch,
      findFilter: f.findFilter,
      highprice: f.highprice,
    }));
  }
  function setFindFilter(selectedFindFilter) {
    setFilter((f) => ({
      stars: f.stars,
      category: f.category,
      search: f.search,
      findFilter: selectedFindFilter,
      highprice: f.highprice,
    }));
  }

  function clearFilter() {
    setCategory("all");
    setStars(null);
    setSearch(null);
    setFindFilter(null);
  }
  

  function setHighPrice() {
    setProductsCopy([
      ...productsCopy.sort((a, b) => {
        return b.price - a.price;
      }),
    ]);
  }
  function setLowPrice() {
    setProductsCopy([
      ...productsCopy.sort((a, b) => {
        return a.price - b.price;
      }),
    ]);
  }

  
 

  useEffect(() => {
    if (filter.stars !== null) {
      setProductsCopy((p) => p.filter((p) => p.rating.rate >= filter.stars));
    } else {
      setProductsCopy(products);
    }
    if (filter.category === "men's clothing") {
      setProductsCopy((p) => p.filter((p) => p.category === "men's clothing"));
    } else if (filter.category === "women's clothing") {
      setProductsCopy((p) =>
        p.filter((p) => p.category === "women's clothing")
      );
    } else if (filter.category === "jewelery") {
      setProductsCopy((p) => p.filter((p) => p.category === "jewelery"));
    } else if (filter.category === "electronics") {
      setProductsCopy((p) => p.filter((p) => p.category === "electronics"));
    }
    if (filter.search != null) {
      setProductsCopy((p) =>
        p.filter((p) =>
          p.title.toLowerCase().includes(filter.search.toLowerCase())
        )
      );
    }
    if (filter.findFilter != null) {
      setProductsCopy((p) =>
        p.filter((p) =>
          p.category.toLowerCase().includes(filter.findFilter.toLowerCase())
        )
      );
    }
  }, [filter, products]);

  useEffect(() => {
    if (productsCopy.length === 0) {
      setMinValue(0);
      setMaxValue(0);
    } else {
      setMinValue(Math.min(...productsCopy.map((p) => p.price)));
      setMaxValue(Math.max(...productsCopy.map((p) => p.price)));
    }
  }, [productsCopy]);
  

  return (
    <div>
      <Navbar setSearch={setSearch} setShow={setShowSidbar} show={showSidbar}/>
      

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
          setFindFilter={setFindFilter}
          clearFilter={clearFilter}
          setShowSidbar={setShowSidbar}
          showSidbar={showSidbar}
        />
        <div className=" w-full overflow-auto">
          <Section2
            highPrice={setHighPrice}
            lowPrice={setLowPrice}
            changeview={changeview}
            setView={setChangeView}
            showSidbar={showSidbar}
          />
          <div className="flex flex-wrap my-6   items-center content-center justify-center ">
            <Product
              productsCopy={productsCopy}
              setProductCopy={setProductsCopy}
              selectedMin={selectedMin}
              selectedMax={selectedMax}
              products={products}
              changeview={changeview}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Navbar } from "./navbar";
import { Section } from "./section";
import { SideBar } from "./sidebar";
import { Section2 } from "./section2";
import { Product } from "./product";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);
  const [starsFilter, setStarsFilter] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All")
  const [findFilter,setFindFilter]=useState("")
  const [search, setSearch] = useState("")

  return (
    <div>
      <Navbar setSearch={setSearch}/>
      <Section />

      <div className="flex bg-slate-300">
        <SideBar
          setMin={setMinValue}
          setMax={setMaxValue}
          min={minValue}
          max={maxValue}
          setStarsFilter={setStarsFilter}
          setFilterCategory={setFilterCategory}
          setFindfilter={setFindFilter}
        />
        <div className=" w-full overflow-auto">
          <Section2 />
          <div className="flex flex-wrap my-6 mx-16 items-center content-center justify-center lg:justify-start">
            <Product min={minValue} max={maxValue} starsFilter={starsFilter} categoryFilter={filterCategory} search={search} findFilter={findFilter}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

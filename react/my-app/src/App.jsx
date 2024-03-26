import { useState , useEffect } from "react";
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
  const [pro,setPro]=useState([])
  const [price ,setPrice]=useState([])
//-----------------------------------------------------
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json[0] = {
        id: json[0].id,
        title: "Backpack, Fits 15 Laptops",
        price: json[0].price,
        description: json[0].description,
        category: json[0].category,
        image: json[0].image,
        rating: {
          rate: 3,
          count: json[0].rating.count,
        },
      };

      json[1] = {
        id: json[1].id,
        title: "men's clothing",
        price: json[1].price,
        description: json[1].description,
        category: json[1].category,
        image: json[1].image,
        rating: {
          rate: 4,
          count: json[1].rating.count,
        },
      };
      json[2] = {
        ...json[2],
        rating: {
          rate: 4,
          count: json[2].rating.count,
        },
      };
      json[3] = {
        ...json[3],
        rating: {
          rate: 2,
          count: json[3].rating.count,
        },
      };
      json[4] = {
        id: json[4].id,
        title: "Women's chain bracelet",
        price: 450,
        description: json[4].description,
        category: json[4].category,
        image: json[4].image,
        rating: {
          rate: 3,
          count: json[4].rating.count,
        },
      };
      json[5] = {
        ...json[5],
        rating: {
          rate: 4,
          count: json[5].rating.count,
        },
      };
      json[7] = {
        id: json[7].id,
        title: "Golden double ring",
        price: json[7].price,
        description: json[7].description,
        category: json[7].category,
        image: json[7].image,
        rating: {
          rate: 2,
          count: json[7].rating.count,
        },
      };
      json[8] = {
        id: json[8].id,
        title: "External Hard Drive 2TB",
        price: json[8].price,
        description: json[8].description,
        category: json[8].category,
        image: json[8].image,
        rating: {
          rate: 3,
          count: json[8].rating.count,
        },
      };
      json[9] = {
        id: json[9].id,
        title: "1TB Internal SSD",
        price: json[9].price,
        description: json[9].description,
        category: json[9].category,
        image: json[9].image,
        rating: {
          rate: 3,
          count: json[9].rating.count,
        },
      };
      json[10] = {
        id: json[10].id,
        title: "Silicon Power 256GB SSD",
        price: json[10].price,
        description: json[10].description,
        category: json[10].category,
        image: json[10].image,
        rating: {
          rate: 5,
          count: json[10].rating.count,
        },
      };
      json[11] = {
        id: json[11].id,
        title: "External Hard Drive 4TB Gaming",
        price: json[11].price,
        description: json[11].description,
        category: json[11].category,
        image: json[11].image,
        rating: {
          rate: 4,
          count: json[11].rating.count,
        },
      };
      json[12] = {
        id: json[12].id,
        title: "Monitor Acer Full Hd",
        price: 490,
        description: json[12].description,
        category: json[12].category,
        image: json[12].image,
        rating: {
          rate: 3,
          count: json[12].rating.count,
        },
      };
      json[13] = {
        id: json[13].id,
        title: "Samsung Super Ultrawide QLED",
        price: 498,
        description: json[13].description,
        category: json[13].category,
        image: json[13].image,
        rating: {
          rate: 2,
          count: json[13].rating.count,
        },
      };
      json[14] = {
        id: json[14].id,
        title: "Winter Coats Women",
        price: json[14].price,
        description: json[14].description,
        category: json[14].category,
        image: json[14].image,
        rating: {
          rate: 3,
          count: json[14].rating.count,
        },
      };

      json[15] = {
        id: json[15].id,
        title: " Moto Biker Jacket",
        price: json[15].price,
        description: json[15].description,
        category: json[15].category,
        image: json[15].image,
        rating: {
          rate: 3,
          count: json[15].rating.count,
        },
      };
      json[16] = {
        id: json[16].id,
        title: "  Rain Jacket Women ",
        price: json[16].price,
        description: json[16].description,
        category: json[16].category,
        image: json[16].image,
        rating: {
          rate: 4,
          count: json[16].rating.count,
        },
      };
      json[17] = {
        id: json[17].id,
        title: "Women's short stein",
        price: json[17].price,
        description: json[17].description,
        category: json[17].category,
        image: json[17].image,
        rating: {
          rate: 5,
          count: json[17].rating.count,
        },
      };
      json[18] = {
        id: json[18].id,
        title: " Women's Short Sleeve ",
        price: json[18].price,
        description: json[18].description,
        category: json[18].category,
        image: json[18].image,
        rating: {
          rate: 4,
          count: json[18].rating.count,
        },
      };
      json[19] = {
        id: json[19].id,
        title: " Women's TShort  ",
        price: json[19].price,
        description: json[19].description,
        category: json[19].category,
        image: json[19].image,
        rating: {
          rate: 4,
          count: json[19].rating.count,
        },
      };
      
      setPro(json)
    })
    .catch((err) => {
      console.log(err.message);
    });
}, []);



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
          pro={pro}
          
          
        />
        <div className=" w-full overflow-auto">
          <Section2 />
          <div className="flex flex-wrap my-6 mx-16 items-center content-center justify-center lg:justify-start">
            <Product min={minValue} max={maxValue} starsFilter={starsFilter} categoryFilter={filterCategory} search={search} findFilter={findFilter} pro={pro} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

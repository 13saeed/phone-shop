import MultiRangeSlider from "multi-range-slider-react";
import "./multirangeslider.css";



export function SideBar({ setMin, setMax, min, max, setStarsFilter , setFilterCategory }) {
 
  return (
    <div className="flex bg-slate-200">
      <div className="flex-col bg-white border-r border-slate-100 lg:w-[340px] hidden lg:flex">
        <div className="flex items-center pl-9 py-6">
          <div className="flex-1">
            <h2 className="text-xl">Filters</h2>
          </div>
          <div className="flex pr-10">
            <a className="text-sm cursor-pointer text-blue-400">
              Delete all filters
            </a>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center p-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              className="py-3 pl-10 w-[260px] bordered border-slate-100 bg-slate-100 text-slate-800 rounded-xl items-center focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1"
              placeholder="Find Filter"
            />
          </div>
        </div>

        <h2 className="text-lg pl-9 py-3">Price</h2>
        <div className="flex justify-center">
          <div className="flex w-[100px] justify-center items-center rounded-xl border border-slate-300">
            <p className="text-center text-sm">${min}</p>
          </div>

          <p className="text-lg text-center px-2 lg:px-5 lg:pb-5">_</p>

          <div className="flex w-[100px] justify-center items-center rounded-xl border border-slate-300">
            <p className="text-center text-sm">${max}</p>
          </div>
        </div>
        <div>
          <MultiRangeSlider
            style={{ border: "none", boxShadow: "none" }}
            baseClassName="multi-range-slider"
            min={0}
            max={500}
            step={5}
            ruler={false}
            label={false}
            preventWheel={false}
            thumbLeftColor="white"
            thumbRightColor="white"
            minValue={min}
            maxValue={max}
            onInput={(e) => {
              setMin(e.minValue);
              setMax(e.maxValue);
            }}
          />
        </div>

        <hr className="ml-7 mt-8 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Category</h4>
          </div>
          <div className="flex pr-8">
            <button className="cursor-pointer">
              {" "}
              <i className="fa-solid fa-chevron-up fa-xs"></i>{" "}
            </button>
          </div>
        </div>
        <div  className=" m-5 w-[300px]">
        <div className="flex ml-8">
            <label className="label cursor-pointer">
              <span className="label-text text-slate-600 pl-3" onClick={() => setFilterCategory("All")} >
                All
              </span>
            </label>
          </div>
          <div className="flex ml-8 mt-2">
            <label className="label cursor-pointer">
              <a className="label-text text-slate-600 pl-3" onClick={() => setFilterCategory("men's clothing")} >
                Mens clothing 
              </a>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <a className="label-text text-slate-600 pl-3" onClick={() => setFilterCategory("women's clothing")} >
                Womens clothing  
              </a>
            </label>
          </div>

          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <a className="label-text text-slate-600 pl-3" onClick={() => setFilterCategory("jewelery")}>
                Jewelery 
              </a>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <span className="label-text text-slate-600 pl-3" onClick={() => setFilterCategory("electronics")} >
                Electronics 
              </span>
            </label>
          </div>
        </div>

        <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
        <h4 className="text-start text-lg pl-9 py-3 my-3">Customers rating</h4>
        <div className=" m-5 w-[300px]">
          <div className="flex items-center ml-9 mt-4 mb-2">
            <div className="rating rating-sm ml-2">
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 checked:bg-orange-400" onChange={() => { setStarsFilter(1) }} />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 checked:bg-orange-400" onChange={() => { setStarsFilter(2) }} />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 checked:bg-orange-400" onChange={() => { setStarsFilter(3) }} />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 checked:bg-orange-400" onChange={() => { setStarsFilter(4) }} />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400 checked:bg-orange-400" onChange={() => { setStarsFilter(5) }} />
            </div>
          </div>
        </div>
        <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Available in store</h4>
          </div>

          <div className="flex pr-8">
            <button className="cursor-pointer">
              {" "}
              <i className="fa-solid fa-chevron-up fa-xs"></i>{" "}
            </button>
          </div>
        </div>

        <div id="3" className="w-full h-16 bg-red-500"></div>

        <hr className="ml-7 mt-4 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Status</h4>
          </div>
          <div className="flex pr-8">
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
        </div>
        <hr className="ml-7 mt-4 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Type</h4>
          </div>
          <div className="flex pr-8">
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
        </div>
        <hr className="ml-7 mt-4 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Device type</h4>
          </div>
          <div className="flex pr-8">
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
        </div>
        <hr className="ml-7 mt-4 w-5/6 border-slate-100" />
      </div>
    </div>
  );
}

import MultiRangeSlider from "multi-range-slider-react";
import "./multirangeslider.css";
import { Stars } from "./star";
import { useState } from "react";

export function SideBar({
  filter,
  setStars,
  setCategory,
  min,
  max,
  selectedMin,
  selectedMax,
  setSelectedMin,
  setSelectedMax,
  setFindFilter,
  clearFilter,
  setShow,
  show,
})
 {
 
  return (
    <>
      <div
        className={`bg-slate-200 shadow-black shadow-[0_99px_60px_30px_rgba(0,0,0,0.3)] z-10 ${show ? "flex" : "hidden"} lg:flex lg:shadow-none`}
      >
        <div className="flex-col bg-white border-r border-slate-100 w-[316px]  lg:w-[340px] lg:flex ">
          <div className="flex justify-end p-3 mt-4 cursor-pointer">
            <i
              class="fa-regular fa-circle-xmark fa-lg lg:hidden"
              onClick={() => setShow(!show)}
            ></i>
          </div>
          <div className="flex items-center pl-9 pb-6 ">
            <div className="flex-1">
              <h2 className="text-xl">Filters</h2>
            </div>
            <div className="flex pr-10">
              <button
                className="text-sm cursor-pointer text-blue-400"
                onClick={clearFilter}
              >
                Delete all filters
              </button>
            </div>
          </div>
          <div className="flex justify-center my-2">
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 flex items-center p-4">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                id="search"
                type="text"
                className="py-3 pl-10 w-[260px] bordered border-slate-100 bg-slate-100 text-slate-800 rounded-xl items-center focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1"
                onChange={(e) => setFindFilter(e.target.value)}
                placeholder="Find Filter"
              />
            </div>
          </div>

          <h2 className="text-lg pl-9 py-3">Price</h2>
          <div className="flex justify-center">
            <div className="flex w-[100px] justify-center items-center rounded-xl border border-slate-300">
              <p className="text-center text-sm">{selectedMin}$</p>
            </div>

            <p className="text-lg text-center px-2 lg:px-5 lg:pb-5">_</p>

            <div className="flex w-[100px] justify-center items-center rounded-xl border border-slate-300">
              <p className="text-center text-sm">{selectedMax}$</p>
            </div>
          </div>
          <div>
            {min === 0 && max === 0 ? (
              <MultiRangeSlider
                style={{ border: "none", boxShadow: "none" }}
                baseClassName="multi-range-slider"
                min={min}
                max={max}
                step={1}
                ruler={false}
                label={false}
                preventWheel={false}
                thumbLeftColor="white"
                thumbRightColor="white"
                minValue={min}
                maxValue={max}
                onInput={(e) => {
                  setSelectedMin(e.minValue);
                  setSelectedMax(e.maxValue);
                }}
                disabled
              />
            ) : (
              <MultiRangeSlider
                style={{ border: "none", boxShadow: "none" }}
                baseClassName="multi-range-slider"
                min={min}
                max={max}
                step={1}
                ruler={false}
                label={false}
                preventWheel={false}
                thumbLeftColor="white"
                thumbRightColor="white"
                minValue={min}
                maxValue={max}
                onInput={(e) => {
                  setSelectedMin(e.minValue);
                  setSelectedMax(e.maxValue);
                }}
              />
            )}
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
          
          <div className=" m-5 w-[300px]">
            <label className="flex ml-8  hover:bg-slate-100 hover:w-3/4 hover:rounded-lg  hover:font-bold label cursor-pointer ">
              <button
                className="label-text text-slate-600 pl-3 hover:text-blue-500"
                onClick={() => setCategory(null)}
              >
                All
              </button>
            </label>
            <label className="flex ml-8 mt-2 label cursor-pointer hover:bg-slate-100 hover:w-3/4 hover:rounded-lg  hover:font-bold">
              <button
                className="label-text text-slate-600 pl-3 hover:text-blue-500"
                onClick={() => setCategory("men's clothing")}
              >
                Mens clothing
              </button>
            </label>
            <label className="flex ml-8 label cursor-pointer hover:bg-slate-100 hover:w-3/4 hover:rounded-lg  hover:font-bold">
              <button
                className="label-text text-slate-600 pl-3 hover:text-blue-500"
                onClick={() => setCategory("women's clothing")}
              >
                Womens clothing
              </button>
            </label>

            <label className="flex ml-8 label cursor-pointer hover:bg-slate-100 hover:w-3/4 hover:rounded-lg  hover:font-bold">
              <button
                className="label-text text-slate-600 pl-3 hover:text-blue-500"
                onClick={() => setCategory("jewelery")}
              >
                Jewelery
              </button>
            </label>
            <label className="flex ml-8 label cursor-pointer hover:bg-slate-100 hover:w-3/4 hover:rounded-lg  hover:font-bold">
              <button
                className="label-text text-slate-600 pl-3 hover:text-blue-500"
                onClick={() => setCategory("electronics")}
              >
                Electronics
              </button>
            </label>
          </div>
          <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
          <h4 className="text-start text-lg pl-9 py-3 my-3">
            Customers rating
          </h4>
          <Stars filter={filter} setStars={setStars} />
          <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
          <div className="flex items-center mt-4">
            <div className="flex-1">
              <h4 className="text-start text-lg pl-9 py-3">
                Available in store
              </h4>
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
    </>
  );
}

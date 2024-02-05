import "./index.css";
import Slider from "react-slider";
import { useState } from "react";
const Min = 500;
const Max = 10000;

export function SideBar() {
  const [value, setValue] = useState([Min, Max]);
  return (
    <div className="flex bg-slate-200">
      <div className="flex-col bg-white border-r border-slate-100 lg:w-[340px] hidden lg:flex">
        <div className="flex items-center pl-9 py-6">
          <div className="flex-1">
            <h2 className="text-xl">Filters</h2>
          </div>
          <div className="flex pr-10">
            <a className="text-sm cursor-pointer text-blue-400">
              Delete all fillters
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
            <p className="text-center text-sm">${value[0]}</p>
          </div>
    
            <p className="text-lg text-center px-2 lg:px-5 lg:pb-5">_</p>
          

          <div className="flex w-[100px] justify-center items-center rounded-xl border border-slate-300">
            <p className="text-center text-sm">${value[1]}</p>
          </div>
        </div>
        <div>
          <Slider
            className="slider ml-5 mt-5 w-5/6 h-[5px] bg-slate-300 rounded-md"
            min={Min}
            max={Max}
            value={value}
            onChange={setValue}
          />
        </div>

        <hr className="ml-7 mt-16 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Producer</h4>
          </div>
          <div className="flex pr-8">
            <i className="fa-solid fa-angle-up fa-xs"></i>
          </div>
        </div>
        <div className="overflow-y-scroll m-5 w-[300px]">
          <div className="flex ml-8 mt-2">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text text-slate-600 pl-3">
                Apple (186)
              </span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text text-slate-600 pl-3">
                Samsung (73)
              </span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text text-slate-600 pl-3">
                Xiaomi (53)
              </span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text text-slate-600 pl-3">
                Motorola (41)
              </span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text text-slate-600 pl-3">
                Myphone (25)
              </span>
            </label>
          </div>
        </div>
        <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
        <h4 className="text-start text-lg pl-9 py-3 my-3">Customers rating</h4>
        <div className="overflow-y-scroll m-5 w-[300px]">
          <div className="flex items-center ml-9">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox mt-1 checkbox-sm rounded-md"
            />
            <div className="rating rating-sm ml-2">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
            </div>
          </div>
          <div className="flex items-center ml-9 mt-4">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <div className="rating rating-sm ml-2">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
            </div>
          </div>
          <div className="flex items-center ml-9 mt-4 mb-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded-md"
            />
            <div className="rating rating-sm ml-2">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
            </div>
          </div>
        </div>
        <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
        <div className="flex items-center mt-4">
          <div className="flex-1">
            <h4 className="text-start text-lg pl-9 py-3">Available in store</h4>
          </div>
          <div className="flex pr-8">
            <i className="fa-solid fa-chevron-down fa-xs"></i>
          </div>
        </div>
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

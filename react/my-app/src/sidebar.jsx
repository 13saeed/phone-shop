export function SideBar(){
    return(

    <div className="flex bg-slate-200">
      <div
        className="flex-col bg-white border-r border-slate-100 lg:w-[340px] hidden lg:flex" >
        <div className="flex items-center pl-9 py-6">
          <div className="flex-1">
            <h2 className="text-xl">Filters</h2>
          </div>
          <div className="flex pr-10">
            <a className="text-sm cursor-pointer text-blue-400">Delete all fillters</a>
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
        <div className="flex">
          <div className="relative rounded-md ml-8">
            <div
              className="pointer-events-none absolute inset-y-0 left-8 flex items-center"
            >
              <span className="text-sm">$</span>
            </div>
            <input
              type="number"
              className="pl-10 mr-3 w-[100px] text-sm rounded-xl border-slate-300 appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              value="500"
            />
          </div>
          <div className="flex">
            <p className="text-lg text-center px-2 lg:px-5">_</p>
          </div>
          <div className="relative rounded-md ml-4">
            <div
              className="pointer-events-none absolute inset-y-0 left-8 flex items-center"
            >
              <span className="text-sm">$</span>
            </div>
            <input
              type="number"
              className="pr-3 pl-10 w-[100px] text-sm rounded-xl border-slate-300 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              value="7500"
            />
          </div>
        </div>
        <div className="h-1.5 mt-10 w-full">
          <div className="relative h-1.5 ml-8 w-10/12 rounded-md bg-slate-200">
            <div
              className="absolute bg-blue-400 h-1.5 rounded-md left-3 right-14"
            ></div>
          </div>
        </div>

        <div className="range-input relative">
          <input
            type="range"
            min="0"
            max="10000"
            value="500"
            className="absolute range-min rounded-xl top-[-6px] left-5 h-1.5 w-full bg-transparent appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-3xl [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-[2px] [&::-webkit-slider-thumb]:border-blue-500 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-3xl [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-[2px] [&::-moz-range-thumb]:border-blue-500"
          />
          <input
            type="range"
            min="0"
            max="10000"
            value="7500"
            className="absolute range-max rounded-xl top-[-6px] h-1.5 w-11/12 bg-transparent appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-3xl [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-[2px] [&::-webkit-slider-thumb]:border-blue-500 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-3xl [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-[2px] [&::-moz-range-thumb]:border-blue-500"
          />
        </div>
        <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
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
                checked="checked"
                className="checkbox checkbox-sm rounded-md"
              />
              <span className="label-text text-slate-600 pl-3">Apple (186)</span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
              <span className="label-text text-slate-600 pl-3">Samsung (73)</span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
              <span className="label-text text-slate-600 pl-3">Xiaomi (53)</span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
              <span className="label-text text-slate-600 pl-3">Motorola (41)</span>
            </label>
          </div>
          <div className="flex ml-8">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
              <span className="label-text text-slate-600 pl-3">Myphone (25)</span>
            </label>
          </div>
        </div>
        <hr className="ml-7 mt-7 w-5/6 border-slate-100" />
        <h4 className="text-start text-lg pl-9 py-3 my-3">Customers rating</h4>
        <div className="overflow-y-scroll m-5 w-[300px]">
          <div className="flex items-center ml-9">
            <input
              type="checkbox"
              checked
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
            <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
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
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star ml-1.5 bg-yellow-400 checked:bg-yellow-400"
              />
            </div>
          </div>
          <div className="flex items-center ml-9 mt-4 mb-2">
            <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
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
                checked
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

    )
}
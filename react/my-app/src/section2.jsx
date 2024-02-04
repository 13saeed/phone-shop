export function Section2(){
    return(
    <div className="w-full overflow-x-auto">
            <div
          className="flex flex-col items-center border-r border-slate-100 bg-white w-full h-24 pl-10 sm:flex-row lg:h-16"
            >
          <div className="flex m-2 lg:m-0">
            <a
              ><i
                className="fas fa-grip-horizontal cursor-pointer text-blue-400 fa-xl lg:ml-14"
              ></i
            ></a>
            <a
              ><i
                className="fa-solid fa-list text-slate-300 ml-5 fa-xl cursor-pointer hover:text-black"
              ></i
            ></a>
            <a
              ><i
                className="fa-solid fa-table-list text-slate-300 ml-5 cursor-pointer hover:text-black fa-xl"
              ></i
            ></a>
          </div>
          <div
            className="flex justify-center sm:justify-end items-center w-full sm:mr-10"
          >
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-sm text-xs btn-ghost border border-slate-200 rounded-xl px-10 lg:px-5 m-2"
              >
                Most expensive
                <i className="fa-solid fa-chevron-down fa-xs pl-8 lg:pl-32"></i>
              </div>
              <ul
                tabindex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 lg:w-56"
              >
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <i className="fa-solid fa-angle-left fa-xs px-8 ml-4 lg:ml-10"></i>
            <input
              type="number"
              className="w-[40px] text-center text-sm rounded-xl border-slate-200 text-slate-500 appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              value="1"
            />
            <p className="text-xs px-2">of</p>
            <p className="text-md">22</p>
            <i className="fa-solid fa-angle-right fa-xs pl-8 mr-4 lg:mr-8"></i>
          </div>
        </div>
    </div>

    )
}
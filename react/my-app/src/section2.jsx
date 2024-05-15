export function Section2({ highPrice, lowPrice, view, setView , show }) {
  return (
    <div className="w-full">
      <div className="flex flex-col flex-wrap justify-between  items-center border-r border-slate-100 bg-white w-full h-24 md:pl-10 sm:flex-row lg:h-16">
        <div className={` m-2 hidden md:flex lg:m-0 md:${show ? "hidden" : ""}`}>
          <button onClick={() => setView(true)}>
            {view ? (
              <i className="fas fa-grip-horizontal cursor-pointer text-blue-400 fa-xl lg:ml-14"></i>
            ) : (
              <i className="fas fa-grip-horizontal cursor-pointer text-slate-300 fa-xl lg:ml-14 hover:text-black"></i>
            )}
          </button>
          <button onClick={() => setView(false)}>
            {view === false ? (
              <i className="fa-solid fa-list text-blue-400 ml-5 fa-lg cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-list text-slate-300 ml-5 fa-lg cursor-pointer hover:text-black"></i>
            )}
          </button>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-sm text-xs btn-ghost border border-slate-200 rounded-xl px-5  lg:px-5 m-2"
            >
              Most expensive
              <i className="fa-solid fa-chevron-down fa-xs  lg:pl-32"></i>
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-box w-40 lg:w-56"
            >
              <li>
                <button onClick={highPrice}>Ascending</button>
              </li>
              <li>
                <button onClick={lowPrice}>Descending</button>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-end my-2 md:mr-16">
            <i className="fa-solid fa-angle-left fa-xs px-5 cursor-pointer md:ml-5 lg:ml-10"></i>
            <input
              type="number"
              className="w-[20px] text-center text-sm rounded-xl border-slate-200 text-slate-500 appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              defaultValue="1"
            />
            <p className="text-sm px-3">of</p>
            <p className="text-md">22</p>
            <i className="fa-solid fa-angle-right fa-xs px-5 cursor-pointer lg:mr-8"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

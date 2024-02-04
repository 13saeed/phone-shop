export function Section(){
    return(
    <div className="flex flex-col items-center sm:flex-row lg:flex-row">
      <div>
        <div
          className="text-sm overflow-hidden border-slate-100 border-b breadcrumbs pl-10 pr-12 py-5"
        >
          <ul>
            <li className="hover:text-blue-400"><a>BuyPhone</a></li>
            <li><a className="hover:text-blue-400">Store</a></li>
            <li class="active">Phones (732)</li>
          </ul>
        </div>
      </div>
      <div
        className="flex items-center justify-center border border-t-0 border-slate-100 bg-white w-full h-[60px] lg:justify-start"
      >
        <div
          className="badge badge-md ml-5 rounded-2xl bg-gray-200 p-5 gap-2 lg:ml-20"
        >
          Clear all
          <i className="fa-solid fa-xmark fa-md"></i>
        </div>
        <h3 className="ml-5 lg:ml-8">Producent:</h3>
        <div className="badge badge-md ml-2 rounded-2xl bg-white p-5 gap-2">
          Apple
          <i className="fa-solid fa-xmark fa-md"></i>
        </div>
      </div>
    </div>
    );
}
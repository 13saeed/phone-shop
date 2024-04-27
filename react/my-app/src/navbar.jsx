export function Navbar({setSearch}) {
    
    return(
    <>
    <div
      className="navbar flex-col  bg-white border-b border-1 border-slate-100 items-center p-4 lg:flex-row">
      <div className="flex flex-col sm:justify-around sm:w-full  sm:flex-row">
        <a href="#"
        className="font-black text-3xl mb-2 text-black lg:mr-28 lg:mb-0 cursor-pointer text-start mr-4">OnlineShop</a>

      <div className="relative m-1 rounded-md">
        <div className="absolute inset-y-0 left-0 flex items-center p-4">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          className="py-3 px-10 w-[250px] bordered border-slate-100 bg-slate-100 text-slate-800 rounded-xl items-center focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1 sm:w-[350px] lg:w-[500px]"
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="search"
        />
      </div>
    </div>
    <div className="navbar-center">
        <div className="tabs tabs-lg lg:tabs-md my-5 lg:my-0">
          <a
            href="#"
            className="tab  text-md hover:text-blue-400 hover:font-bold active lg:pl-20">Store</a>
          <a
            href="#"
            className="tab px-5 text-md hover:text-blue-400 hover:font-bold">Newslatter</a>
          <a
            href="#"
            className="tab px-5 text-md hover:text-blue-400 hover:font-bold">List</a>
          <a
            href="#"
            className="tab px-5 text-md hover:text-blue-400 hover:font-bold">Help</a>
        </div>
      </div>
      <div className="navbar-end justify-center lg:justify-end lg:mr-0 lg:ml-0">
        <i className="fa-solid fa-bars text-slate-500 fa-lg p-3 cursor-pointer hover:text-blue-400 lg:hidden"></i>
        <i className="fa-solid fa-user  text-slate-500 fa-lg p-5 cursor-pointer hover:text-blue-400"></i>
        <i className="fa-solid fa-heart text-slate-500 fa-lg p-5 cursor-pointer hover:text-blue-400"></i>
        <i className="fa-solid fa-cart-shopping text-slate-500 fa-lg py-5 pl-3 pr-5 cursor-pointer hover:text-blue-400"></i>
      </div>
    </div>
    </>

    );
}
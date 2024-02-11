import { pl } from "./sidebar"

export function Product(){ 
     const items =pl.map( product =>
        <div key={product.id} className="card w-[350px] my-5 md:mr-9 bg-base-100">
          <div className="text-end p-5">
            <i
              className="fa-regular fa-heart text-red-500 fa-lg cursor-pointer"
            ></i>
          </div>
          <figure>
            <img
              src={product.imgSrc}
              alt={product.name}
            />
          </figure>
          <div className="card-body px-6">
            <h2 className="card-title">{product.title}</h2>
            <div className="rating py-1">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star p-[10px] mr-2 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star p-[10px] mr-2 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star p-[10px] mr-2 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star p-[10px] mr-2 bg-yellow-400 checked:bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star p-[10px] mr-2 bg-yellow-400 checked:bg-yellow-400"
              />
              <p className="text-md">(710)</p>
            </div>
            <p className="text-sm text-slate-600 py-1">{product.screen}</p>
            <p className="text-sm text-slate-600 pb-1">
              Processor: {product.processor}
            </p>
            <p className="text-sm text-slate-600 pb-1">Memory: {product.memory}</p>
            <p className="text-sm text-slate-600">System: {product.system}</p>
            <div className="card-actions items-center justify-end">
              <p className="text-3xl font-bold">
                {product.price} <sup className="text-sm font-extralight">99</sup>
              </p>
              <button
                className="p-[15px] bg-blue-600 rounded-2xl hover:bg-blue-800"
              >
                <i
                  className="fa-solid fa-cart-shopping text-white fa-lg cursor-pointer"
                ></i>
              </button>
            </div>
            <a className="text-sm text-blue-500 cursor-pointer">{product.free}</a>
          </div>
         </div>
    )
    return(
      <div

      className="flex flex-wrap items-center align-middle justify-center my-5 mx-3"
    >
    {items}</div>
)
}
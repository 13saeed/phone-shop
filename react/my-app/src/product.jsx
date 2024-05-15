import { Star } from "./star";

export function Product({ productsCopy, selectedMin, selectedMax, view }) {
  const p = [];
  for (const product of productsCopy) {
    if (product.price >= selectedMin && product.price <= selectedMax) {
      if (view === true) {
        p.push(
          <div
            key={product.id}
            className="card w-[350px] h[550px] my-5 md:mr-2 lg:mr-5 bg-base-100 hover:shadow-2xl "
          >
            <div className="text-end  p-5">
              <i className="fa-regular fa-heart text-red-500 fa-lg cursor-pointer"></i>
            </div>
            <figure>
              <img
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] items-center"
                src={product.image}
                alt={product.name}
              />
            </figure>
            <div className="card-body px-6 ">
              <h2 className="card-title items-center">{product.title}</h2>
              <Star stars={product.rating.rate} rev={product.rating.count} />
              <div>
                <p className="text-sm text-slate-400 mt-1">
                  <b>category:</b> {product.category}
                </p>
              </div>

              <div className="card-actions items-center mt-2  justify-end">
                <p className="text-3xl font-bold ">
                  {product.price}${" "}
                  <sup className="text-sm font-extralight">99</sup>
                </p>
                <button className="btn btn-outline btn-blue-600 rounded-3xl hover:bg-blue-800 border-blue-600">
                  See Detail
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        p.push(
          <div
            className="card card-side bg-base-100 shadow-xl w-5/6  my-2"
            key={product.id}
          >
            <figure className="w-[250px] h-[300px] p-7 m-2 ">
              <img className="" src={product.image} alt={product.name} />
            </figure>

            <div className="card-body m-5 p-5">
              <h2 class="card-title">{product.title}</h2>
              <Star stars={product.rating.rate} rev={product.rating.count} />
              <p className="text-slate-400">
                <b>category:</b> {product.category}
              </p>

              <div className="flex justify-around">
                <p className=" text-3xl font-bold justify-center">
                  {product.price}${" "}
                  <sup className="text-sm font-extralight">99</sup>
                </p>

                <button className="btn btn-outline btn-blue-600 rounded-3xl hover:bg-blue-800 border-blue-600">
                  See Detail
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return <>{p}</>;
}

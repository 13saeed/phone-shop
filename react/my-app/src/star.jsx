export const Star = ({ stars, rev }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  bg-orange-400 checked:bg-orange-400"
            disabled
          />
        ) : (
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2  bg-orange-200"
            disabled
          />
        )}
      </span>
    );
  });

  return (
    <div className="rating rating-sm items-center ">
      {ratingStar}{" "}
      <p className=" pt-1 pl-2 text-sm text-gray-500">
        ({rev} customer reviews)
      </p>
    </div>
  );
};


export function Stars({filter , setStars}) {
  return (
    <div className=" m-5 w-[300px]">
      <div className="flex items-center ml-9 mt-4 mb-2">
        <div className="rating rating-sm ml-2 ">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400 focus-visible:none "
            onClick={() => {
              if (filter.stars === 1) {
                setStars(null);
              } else {
                setStars(1);
              }
            }}
          />
          <div/>
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400 "
            onClick={() => {
              if (filter.stars === 2) {
                setStars(null);
              } else {
                setStars(2);
              }
            }}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400 "
            onClick={() => {
              if (filter.stars === 3) {
                setStars(null);
              } else {
                setStars(3);
              }
            }}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400 "
            onClick={() => {
              if (filter.stars === 4) {
                setStars(null);
              } else {
                setStars(4);
              }
            }}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star-2 bg-orange-400 "
            onClick={() => {
              if (filter.stars === 5) {
                setStars(null);
              } else {
                setStars(5);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const Star = ({ stars, rev }) => {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
   
    return <span key={index}>
      {
        stars >= index + 1 ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 checked:bg-orange-400" defaultChecked disabled /> : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" disabled />
      }
    </span>


  })

  return (
    <div className="rating items-center ">
      {ratingStar} <p className=" pt-1 pl-2 text-sm text-gray-500">({rev} customer reviews)</p> 
    </div>
  )
}
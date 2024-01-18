import { React , useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Card = ({prd}) => {
  const [fav,setFav] = useState(false);
  const favAdd = () => {
    if(fav){
      toast.error("Removed Favourite",{ autoClose : 3000 })
    }else{
      toast.success("Add Favourite",{ autoClose : 3000 });
    }
    setFav(!fav);
  }

  return (
    <div className='w-[330px] m-3 p-3 border-2 rounded-2xl bg-orange-300 shadow-xl hover:scale-105 transition-all duration-200 ease-in-out'>
      <div className='relative z-0 flex w-[300px] h-[320px] justify-center items-center bg-white rounded-2xl'>
        <img src={prd.image} alt='product-img' className='max-h-[290px] max-w-[290px] bg-contain'></img>
        <button onClick={favAdd} className={fav?('absolute text-red-600 bg-orange-100 p-3 rounded-full bottom-0 translate-y-[50%] right-3 text-xl cursor-pointer'):('absolute text-[#bfbfbf] bg-orange-100 p-3 rounded-full bottom-0 translate-y-[50%] right-3 text-xl cursor-pointer')}>
         <FaHeart> </FaHeart>
        </button>
      </div>
      <div className='h-[80px] flex justify-center items-center'>
        <div className='text-xl font-bold mt-4 mx-1'>{prd.title.substring(0,40)}{prd.title.length>40?(<span>...</span>):(<span></span>)}</div>
      </div>
      <div className='flex justify-between my-2 mx-1 font-medium text-md'>
        <div className='text-red-900'>${prd.price}</div>
        <div>Rating : {prd.rating.rate}({prd.rating.count})</div>
      </div>
      <div className='text-sm font-normal'>{prd.description.substring(0,300)}...</div>
    </div>
  )
}

export default Card

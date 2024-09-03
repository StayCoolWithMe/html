import {Nav} from './Nav';

 function get_from_local()
  {
    const items_from_local = JSON.parse(localStorage.getItem("cart_array")) || [];
    console.dir("ITems in the local storage: "+items_from_local);
    return items_from_local;
  }
  const cart_array=get_from_local();

  //how to delete 
  function handle_delete(index){
    let delete_item=cart_array.filter((_,i)=>(i)!==index);
    localStorage.setItem("cart_array",JSON.stringify(delete_item));
    window.location.reload(); 
  }

export const Cart = () => {
 

  return (
    <div className='relative'>
      <nav className='pb-12'><Nav/></nav>
      <div className='px-5 py-10'>
        <div className='grid grid-col  xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 grid-cols-1 mt-16 justify-items-center'>
          {cart_array.length>0?
          (
          
          cart_array.map((item,index)=>(
            <div className='grid border-2 grid-cols-1 justify-start items-start py-5 px-4 transition duration-100 hover:translate-y-[-5px]'>
               <h3 className="font-palanquin font-semibold text-2xl mt-3">{item.text}</h3>
                <p className="font-palanquin text-slate-gray text-lg mt-4 mb-5">{item.from}</p>
              <img  src={item.imgURL} alt='logo' />

              <div className='flex justify-between mt-3'>
                <button className="border px-3 py-0 border-solid  border-black rounded-full">{item.btn}</button>
                <button onClick={()=>handle_delete(index)} className='bg-coral-red text-white font-semibold px-3 py-0 border-solid   rounded-xl'>Delete</button>
              </div>
            </div>
          ))
        ):
        (
          <h1>No item added</h1>

        )

        }
               
         



        </div>

      </div>
    </div>
  )
}

export default Cart


//store item to array and indivitual
//give data from one to another
//display corresponding item
//display all item
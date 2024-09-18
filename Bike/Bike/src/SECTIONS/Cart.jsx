import {Nav} from './Nav';
import {handlePrice} from './Calculation';

 function get_from_local()
  {
    const items_from_local = JSON.parse(localStorage.getItem("cart_array")) || [];
    console.dir("ITems in the local storage: "+items_from_local);
    console.log("Size"+items_from_local);
    return items_from_local;
  }
  const cart_array=get_from_local();

  //how to delete 
  function handle_delete(index){
    let delete_options=parseInt(document.getElementById(`delete_options_${index}`).value,10)||1;
    if(delete_options>0)
    {
      if(cart_array[index].quantity>=delete_options)
      {
        cart_array[index].quantity-=delete_options;
        if(cart_array[index].quantity===0)
        {
          cart_array.splice(index,1);
        }
        localStorage.setItem("cart_array",JSON.stringify(cart_array));
        handlePrice();
        window.location.reload(); 
      }
      else{
        alert("You can't delete more than the quantity");
      }
    }
  }
  
export const Cart = () => {
  return (
    <div className='relative'>
      <nav className='pb-12'><Nav/></nav>
      <div className='px-5 py-10'>
      <div className='grid grid-cols-4 gap-5 max-xl:grid-cols-1'>
        {/* items part----------------------------------------------------- */}
            <div className='col-span-3'>
            <div className='grid grid-col  xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 grid-cols-1 mt-16 justify-items-center'>
              {cart_array.length>0?
              (
              
              cart_array.map((item,index)=>(
                <div className='grid border-2 grid-cols-1 justify-start items-start py-5 px-4 transition duration-100 hover:translate-y-[-5px]'>
                   <h3 className="font-palanquin font-semibold text-2xl mt-3">{item.text}</h3>
                    <p className="font-palanquin text-slate-gray text-lg mt-4 mb-5">{item.from}</p>
                  <img  src={item.imgURL} alt='logo' />
              
                  
                    <h1 ><span className='font-montserrat font-semibold'>Size:</span> {item.size} </h1>
                    <h1 className='mt-2 font-montserrat font-semibold'>Quantity: {item.quantity}</h1>
                    <div className='gap-3 flex mt-3'>
                      <input id={`delete_options_${index}`} type="number" className='border-2 w-1/5' min={1} defaultValue={1} />
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
        {/* SIDEBAR-------------------------------------------------------- */}
        
            <div className='mt-16 py-5 border-2  h-auto  '>
              <h1 className='px-3 font-bold font-montserrat mt-5 text-2xl'>Order Summary</h1>
              <div className='px-3 mt-3 grid grid-cols-2 gap-3'>
                    <p className='font-montserrat '>Item:</p>
                    <p id='price' className='font-montserrat ml-14'></p>

                    <p className='font-montserrat'>Total before tax:</p>
                    <p  id='price2' className='font-montserrat ml-14'></p>

                    <p className='font-montserrat'>Estimate tax (10%):</p>
                    <p id='total_with_tax' className='font-montserrat ml-14'></p>
              </div>
              <div className='px-3 mt-3 grid grid-cols-2 gap-4'>
              <h1 className=' font-bold font-montserrat text-red-500  text-2xl '>Order total:</h1>
              <p id='overall' className='font-montserrat ml-14'></p>
              </div>

            </div>
            
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
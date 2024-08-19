

export const ShoesCart = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    
    let handleclick=()=>{
        if(bigShoeImg!==imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        } 
    }



  return (
    <div className={`border-2 rounded-xl
        ${ bigShoeImg===imgURL.bigShoe
         ?'border-coral-red'
         :'border-transparent'
        }cursor-pointer max-sm:flex-1`
    } onClick={handleclick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail} alt=" shoe collection" className="w-[127px] h-[103px] object-contain" />
        </div>
        
    </div>
  )
}

export default ShoesCart
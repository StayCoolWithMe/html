export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart)
{
    cart=[

        {
            productId:`e43638ce-6aa0-4b85-b27f-e1d07eb678c6`,
            quantity:1,
            deliveryOptionId:'1'
        },
        {
            productId:`15b6fc6f-327a-4ec4-896f-486349e85a3d`,
            quantity:2,
            deliveryOptionId:'2',
        }
    ];
}


export function savestorage()
{
    localStorage.setItem('cart',JSON.stringify(cart));

}

export function RemoveAnArray(productId)
{
    let NewArray=[];
  
    cart.forEach((cartItem)=>{
        if(cartItem.productId!=productId)
        {
            NewArray.push(cartItem);
        }
    });
    cart=NewArray;
    savestorage();
}

export function updateDeliveryOption(productId,deliveryOptionId)
{
    let isMatch = false;
    cart.forEach((item) => {
        if (productId === item.productId) {
            isMatch = true;
            item.deliveryOptionId = deliveryOptionId;
        }


    });
    if(isMatch)
    {
        savestorage();

    }
    
}
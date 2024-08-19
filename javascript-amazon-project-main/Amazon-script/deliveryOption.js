export let deliveryOptions=[
    {
        id:'1',
        deliveryTime:7,
        deliveryPrice:0,
    },
    {
        id:'2',
        deliveryTime:3,
        deliveryPrice:499,    
    },
    {
        id:'3',
        deliveryTime:1,
        deliveryPrice:999,
    }

];

export function getDeliveryOption(deliveryOptionId)
{
    let deliveryOption;
    

    deliveryOptions.forEach((options)=>
    {
      if(deliveryOptionId===options.id)
      {
        deliveryOption=options;
      }
    })
    return deliveryOption || deliveryOption[0];
}
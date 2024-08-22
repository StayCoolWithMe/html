import { Bike2,Bike3,Bike4,Bike5,Bike6,Bike7,Bike8,Bike9,Bike10,Blog,Event, Service } from "../assets/images/index";
import {Gear, Brake, Outlet, Rider} from '../assets/images/index';
export const Arival_Feature=[
    {
        id:1,
        text:'Riprock 24-Gloss Blaze Orange/Smoke',
        imgURL:Bike2,
        from:'Guff',
        price:'$700.00USD',
        btn:'New',
    },
    {
        id:2,
        text:'Sirrux X5.0-Satin Red Tint/Black/Gray',
        imgURL:Bike3,
        from:'Enduro',
        before:'$8,700.00USD',
        price:'$2,250.00USD',
        btn:'New',

    },
      {
        id:3,
        text:'Turbo Combo-Sl 5.0 -Smoke/Transparent',
        imgURL:Bike4,
        from:'Diamond',
        before:'$21,199.00USD',
        price:'$2,349.00USD',
        btn:'New',
        salebtn:'Sale',

    },
      {
        id:4,
        text:'Stumpjumper 15Pro -Satin Green/Gunmental',
        imgURL:Bike5,
        from:'Extreme',
        price:'$6,000.00USD',
        btn:'New',

    },
      {
        id:5,
        text:'Turbo Combo 4.0 IGH -Cast Black',
        imgURL:Bike6,
        from:'Obus',
        price:'$3,849.00USD',
        btn:'New',
        

    },
      {
        id:6,
        text:'Roubaix SL8 Pro -Gloss Metalic Pine',
        imgURL:Bike7,
        from:'Diamond',
        price:'$8,500.00USD',
        btn:'New',

    },
      {
        id:7,
        text:'Roll 3.0 Low Entry',
        imgURL:Bike8,
        from:'Guff',
        price:'$1,199.00USD',
        btn:'New',

    },
     {
        id:8,
        text:'Termac SL7 Comp -Gloss Metalic Spruce',
        imgURL:Bike9,
        from:'Obus',
        price:'$4,700.00USD',
        btn:'New',
        salebtn:'Sale',

    },
     {
        id:9,
        text:'Crux Expert -Gloss Carbon/Tarmac Black',
        imgURL:Bike10,
        from:'Steel',
        price:'$4,299.00USD',
        btn:'New',
        salebtn:'Sale',
    },
    
].map((item)=>(
  {
    ...item,
    addToCart:'Add To Cart'

  }
));


export const Explores=[
  {
    imgURl:Rider,
    text:'BIKES',
  },
  {
    imgURl:Brake,
    text:'PARTS',
  },
  {
    imgURl:Gear,
    text:'GEAR',
  },
  {
    imgURl:Outlet,
    text:'OUTLET',
  }
];

export const Explore2=[
  {
    imgURl:Service,
    text:'BIKES',
  },
  {
    imgURl:Blog,
    text:'BLOG',
  },
  {
    imgURl:Event,
    text:'EVENTS',
  }
];

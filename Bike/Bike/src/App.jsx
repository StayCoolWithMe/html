
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Master from './SECTIONS/Master';
import Detail from './SECTIONS/Detail';
import Cart from './SECTIONS/Cart'
import Bike from './SECTIONS/ADDTIONAlS/Bike';
import Part from './SECTIONS/ADDTIONAlS/Part';
import Service from './SECTIONS/ADDTIONAlS/Service';
import Gear from './SECTIONS/ADDTIONAlS/Gear';
import Outlet from './SECTIONS/ADDTIONAlS/Outlet';
import Blog from './SECTIONS/ADDTIONAlS/Blog';
import Event from './SECTIONS/ADDTIONAlS/Event';


export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/BIKES' element={<Bike/>}/>
        <Route path='/PARTS' element={<Part/>}/>
        <Route path='/GEAR' element={<Gear/>}/>
        <Route path='/OUTLET' element={<Outlet/>}/>
        <Route path='/BLOG' element={<Blog/>}/>
        <Route path='/EVENTS' element={<Event/>}/>
        
        


      </Routes>
    </BrowserRouter>
  )
}
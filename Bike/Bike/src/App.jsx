
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Master from './SECTIONS/Master';
import Detail from './SECTIONS/Detail';
import Cart from './SECTIONS/Cart'

export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}
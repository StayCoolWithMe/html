
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Master from './SECTIONS/Master';
import Detail from './SECTIONS/Detail';

export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
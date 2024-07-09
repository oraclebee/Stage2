import Home from './Pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import FullDescription from './Pages/FullDescription';

function App() {
  return (
   <>
   <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/checkout" element={<Checkout />} />
    <Route  path="/fulldescription" element={<FullDescription />} />
   </Routes>
   </>
  );
}

export default App;

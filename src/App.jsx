import { Route, Routes } from 'react-router-dom'
import Header from './components/Common/Header';
import Footer from './components/Common/footer';

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Watchlist from "./pages/Watchlist";

function App() {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/coin/:id' element={<Coin />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

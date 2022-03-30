import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Coins from './components/coins/Coins';
import SingleCoin from './components/singleCoin/SingleCoin';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Hero></Hero>}></Route>
       <Route path='/coins' element={<Coins></Coins>}></Route>
       <Route path='/coins/:id' element={<SingleCoin/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

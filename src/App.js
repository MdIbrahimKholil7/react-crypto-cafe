import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Coins from './components/coins/Coins';
import SingleCoin from './components/singleCoin/SingleCoin';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import BdAdress from './components/contact/BdAdress';
import UsaAddress from './components/contact/UsaAddress';
import Spinner from './components/spinner/Spinner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coins/:id' element={<SingleCoin />}></Route>
        <Route path='/contact' element={<Contact />}>
          <Route path='BdAdress' element={<BdAdress />}></Route>
          <Route path='UsaAddress' element={<UsaAddress />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

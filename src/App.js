import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Hero></Hero>}></Route>
       <Route></Route>
     </Routes>
    </div>
  );
}

export default App;


import styled from 'styled-components';
import './App.css';
import NavbarItem from "./NavbarItem";
import Products from "./Products";
import Home from "./components/Home";
import BakeryList from "./components/BakeryList";
import ProductItem from "./components/ProductItem";


function App() {
  return (
    <div className="App"> 
   <Home/>
   <BakeryList/>

   </div>

   
  );
 
}

export default App;

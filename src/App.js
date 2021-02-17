
import styled from 'styled-components';
import './App.css';
import NavbarItem from "./NavbarItem"
import Products from "./Products"


function App() {
  const productsList = Products.map((product) => (
    <div className="List" key={product.id}>
      <img className="Product-image"
        alt={product.name}
        src={product.image}
      />
      
      <p >{product.name}</p>
      <p >{product.price} </p>
      
    </div>
  ));
  return (
    <div className="App">
     
        <div className="App-navbar">
        <h2>Bakery App </h2>
              
       
        <div>
          <NavbarItem text="Home"/> 
          <NavbarItem text="Contact"/> 
          <NavbarItem text="Help"/> 

        </div>
        </div>

        <header className="App-header">
        <img className="App-image"
          alt="bakery shop"
          src="https://images.vector-images.com/clp4/231269/clp3976788.jpg"
         
        />
        <h5>Happiness is the smell of freshly baked BREAD!</h5>

      <div className="List">
      {productsList}
      </div>
         
      </header>
    </div>
  );
}

export default App;

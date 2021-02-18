import React from "react";
import styled from 'styled-components';
import NavbarItem from "../NavbarItem";



const HomeNavbar= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  height: 100px;
  width: 100vw;
  background-color: rgb(199, 130, 131);
  color: rgb(243, 217, 220);
  position: fixed;
  box-sizing: border-box;
  border-style:double;
  border-radius: 30px;
`;


const HomeHeader = styled.header ` 
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props)=> props.theme.mainColor};
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: calc(10px + 2vmin);
  padding: 150px;
  letter-spacing: 5px;
  line-height: 50px;
`;


const HomeImage = styled.img ` 
display: "block";
  margin-left: "auto";
  margin-right: "auto";
  width: "25%";
  border-style: double;
  border-radius: 50px;
`;

const Homeh2 = styled.h2 ` 
 letter-spacing: 5px;
  line-height: 50px;
`;

const Home = () => {
    return (
        <div className="App">
     
        <HomeNavbar>
       
        <Homeh2> Bakery App</Homeh2>
              
       
        <div>
          <NavbarItem text="Home"/> 
          <NavbarItem text="Contact"/> 
          <NavbarItem text="Help"/> 

        </div>
        </HomeNavbar>

        <HomeHeader>
        <HomeImage
          alt="bakery shop"
          src="https://images.vector-images.com/clp4/231269/clp3976788.jpg"
         
        />
        <h5>Happiness is the smell of freshly baked BREAD!</h5>
        </HomeHeader>
        </div>
    )
    
  };



  export default Home;
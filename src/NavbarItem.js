import styled from "styled-components";

const NavbarItemButton= styled.button`
 border: none;
  padding: 10pxpx;
  font-size: medium;
  background-color: rgb(199, 130, 131);
  color: rgb(243, 217, 220);
  cursor: progress;

  &:hover{
  text-decoration: underline;
  }
`;

const NavbarItem=(props) => {
  const sayMyName = (name) => {
    alert(name);
   };
      return(

    <NavbarItemButton onClick={sayMyName}>{props.text}</NavbarItemButton>
      )
    }
    

    export default NavbarItem;
    
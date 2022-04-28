import React from 'react'
import { Menus1 } from './Menus'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Dropdown = () => {
  return (
    <>
        <Dropper>
            {Menus1.map((menu) => {

               return  <li key={menu.id}>
                  <Link to={menu.path}>{menu.list1}</Link>
                    
                </li>
            })}
        </Dropper>
    </>
  )
}




const Dropper = styled.ul`

position:absolute;
bottom:0;
height:65%;
width:74.5%;
background:rgba(119, 113,112,1);
display:none;
margin-bottom:45px;
text-align:center;


li{
    list-style:none;
    cursor:pointer;
    margin-top:20px;
}

a{
  font-family: 'Spectral', serif;
  text-decoration:none;
  color:white;
  font-weight:bold;
}

a:hover{

  font-size:2em;
  color:black;
  font-weight:bold;
}
a:active{

  background-color:black;
  color:white;
  padding:20px;
}

@media (max-width: 768px) {
    display:grid;

  }

`;




export default Dropdown



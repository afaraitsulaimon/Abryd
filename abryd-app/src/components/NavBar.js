import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const NavBar = () => {

    const [listDrop, setListDrop] = useState(false);
    const [click, setClick] = useState(true);

    const displayList = () => {

        if (window.innerWidth < 960) {
            setListDrop(!listDrop);
            setClick(!click);

        }

        
    };


    
  
  return (
    <Container>
        <Logo>
            <Link to='/' style={{ color:'white' }}>Abryd</Link>
        </Logo>
        
                <Lines onClick={displayList}>
                
                {click ? <FaBars /> : <FaTimes/>}

                </Lines>
              
    

        <BriefList>
                

                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
                <li><Link to='/cac-reg'>CAC Reg.</Link></li>
                <li><Link to='/book-keeping'>Book-Keeping</Link></li>
                <li><Link to='/procurement'>Procurement</Link></li>

        </BriefList>
      {listDrop && !click ? <Dropdown/> : ""}
       
    </Container>
  )
}

const Container = styled.div`
        display:flex;
        justify-content:space-between;
        box-sizing: border-box;
        border-radius:20px 20px 0 0;
        
`;

const Logo = styled.h1`
        padding:0 20px;

        a{
            text-decoration:none;
        }
`;

const BriefList = styled.ul`
        

        li{
                display:inline-block;
                padding:15px 20px 0 20px;

                @media (max-width: 768px) {
                    display:none;

                  }
        }

        a{
            text-decoration:none;
            color:white;
            font-family: 'Spectral', serif;
            font-weight:bold;

        }

        a:hover{
          color:black;
          background-color:white;
          padding:0.6em;
          border-radius:5px;
          border:0.1em solid black;

      }
       
        a:active{
          color:black;
          background-color:white;
          padding:0.6em;
          border-radius:5px;
          border:0.1em solid black;
        }

`;


const Lines = styled.div`
        display:none;
        flex-direction:column;
        gap:3px;
        margin-top:35px;
        cursor:pointer;

        @media (max-width: 768px) {
            display:flex;
            margin-left:auto;

          }
        


`;
export default NavBar
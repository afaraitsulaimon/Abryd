import React from 'react';
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Footer = () => {


  return (
        <FooterHolder>
            <div className='firstFooter'>
                <Link to='/' style={{ color:'white' }}>Abryd</Link>
            </div>

            <div className='secondFooter'>
                    <h3>Join Us</h3>
                    <ul>
                        <li><FacebookIcon/></li>
                        <li><TwitterIcon/></li>
                        <li><InstagramIcon/></li>
                    </ul>
            </div>

            <div className='thirdFooter'>
                    <h3>Get in Touch </h3>
                    <ul>
                        <li><MailIcon  style={{ fontSize:'1rem' }}/><span  style={{  fontSize:'1.5rem' }}>     abryd@gmail.com</span> </li>
                        <li><PhoneAndroidIcon  style={{ fontSize:'1rem' }}/><span style={{ fontSize:'1.5rem'}}>+2348033221144</span></li>
                     
                    </ul>
            </div>
        </FooterHolder>
  )
}


const FooterHolder = styled.div`

    display:flex;
    justify-content:space-evenly;
    background-color:grey;
    margin-top:30px;


    .firstFooter {
        width:30%;
        display:flex;
        align-items:center;
        justify-content:center;

        a{

            text-decoration:none;
            font-size:2.5em;
            font-family: 'Spectral', serif;
    
         }

         @media (max-width: 768px) {
            width:100%;

          }
      }


      .secondFooter {
        width:30%;
      
            ul{
                display:flex;
                justify-content:space-evenly;

                li{

                    list-style:none;
                }
            }
        h3{

            text-align:center;
        }

        @media (max-width: 768px) {
            width:100%;
          }
      }



      .thirdFooter{
        width:30%;
        ul{


            li{

                list-style:none;
                text-align:center;
               
            }
        }
    h3{

        text-align:center;
    }

    @media (max-width: 768px) {
        width:100%;
        
      }
      }





    @media (max-width: 768px) {
        display:grid;
       justify-content:center;

      }


    
`;



export default Footer
import React from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { Container } from '@mui/material'
import Footer from '../components/Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import { blue } from '@mui/material/colors';

const ContactUs = () => {
  return (
    <Container maxWidth='xl'>

        <NavHolder>
          <NavBar/>
        </NavHolder>

        <TopContent>
          <h1>
             Get in touch!
          </h1>
          <p>Contact Us for any enquiry you would like to know</p>
        </TopContent>

        <ContactDetails>
            <div className='addressLocation'>
                  <div style={{ textAlign:'center' }}><LocationOnIcon /></div>
                  <div>108 Palm Avenue, Mushin</div>
            </div>


            <div className='phoneNumber'>
                  <div style={{ textAlign:'center' }}><PhoneInTalkIcon /></div>
                  <div>08090786541</div>
            </div>

            <div className='emailAddress'>
                <div style={{ textAlign:'center' }}><EmailIcon /></div>
                <div>abrydlimited@gmail.com</div>
            </div>

        </ContactDetails>

        <MapDetails>
            <div className='mapHolder'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9135797547233!2d3.3419079133899423!3d6.532598295274956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dd72ac8ef11%3A0x43bea5e7e1ec72e!2s108%20Palm%20Avenue%2C%20Mushin%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1651923572228!5m2!1sen!2sng" 
  style={{ width:'100%', height:'100%', border:'2px solid grey', borderRadius:'5px' }}
         />

            </div>

        </MapDetails>

    <Footer/>

    </Container>
  )
}


const NavHolder = styled.div`
    background-color:grey;

`; 

const TopContent = styled.div`
    text-align:center;
    font-family: 'Spectral', serif;

`;



const ContactDetails = styled.div`
    display:flex;
    justify-content:center;
    gap:30px;
    margin-top:40px;
    font-family: 'Spectral', serif;


    .addressLocation{

        cursor:pointer;
        padding:10px;

    }

    .addressLocation:hover{

      background:blue;
      border-radius:5px;
      color:white;

  }

    .phoneNumber{

      cursor:pointer;
      padding:10px;

  }

  .phoneNumber:hover{

    background:blue;
    border-radius:5px;
    color:white;

}



  .emailAddress{

    cursor:pointer;
    padding:10px;

}

.emailAddress:hover{

  background:blue;
  border-radius:5px;
  color:white;
}
`;

const MapDetails = styled.div`
      display:flex;
      justify-content:center;
      margin-top:40px;

    .mapHolder{
      width:40vw;
      height:100vh;
      background-color:purple;
      border-radius:5px;

    }


`;

export default ContactUs
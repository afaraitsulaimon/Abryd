import React from 'react'
import NavBar from '../components/NavBar'
import styled from 'styled-components'
import { Container, Typography } from '@mui/material'
import Footer from '../components/Footer';



const AboutUs = () => {
  return (
    <Container maxWidth='xl'>

        <NavHolder>
          <NavBar/>
        </NavHolder>

       <IntroText>
         <h1>Who We Are</h1>
       </IntroText>
            
      <Content>
            <Typography variant='h6' style={{ fontFamily: 'Spectral', }}>
            An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. Which is why we've created this free, easy-to-use tool that lets you instantly generate a custom About Us page for your store.

              Once your content is generated, you’ll be able to tweak and customize it until it's just right. Create yours now!
           
            An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. Which is why we've created this free, easy-to-use tool that lets you instantly generate a custom About Us page for your store.

              Once your content is generated, you’ll be able to tweak and customize it until it's just right. Create yours now!
            </Typography>
      </Content>


    <Footer/>

    </Container>
  )
}


const NavHolder = styled.div`
    background-color:grey;
`; 


const IntroText = styled.div`
    color:blue;
    height:60vh;
    font-size:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid grey;
    border-radius:10px;
    margin: 10px 0 10px 0;


`;

const Content = styled.div`
    height:80vh;
    text-align:center;
    display:flex;
    align-items:center;

  

`;

export default AboutUs
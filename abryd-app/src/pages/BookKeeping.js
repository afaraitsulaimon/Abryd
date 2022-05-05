import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar';
import { Container } from '@mui/material';
import Discussion from "../images/discussion1.jpg";
import Yanga from "../images/yanga-beauty.jpg";
import Footer from '../components/Footer';
 

const BookKeeping = () => {
  return (
    <Container1>
      <div style={{ backgroundColor:'grey' }}>
        <NavBar />
      </div>

      <Container maxWidth="xlg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xlg={8} lg={8} xs={12} md={8}>
            <h1 style={{ fontSize:'5rem' }}>Run your business.
                We’ll handle your finances.</h1>
          </Grid>
          <Grid item xlg={4} lg={4} md={4}>
            <div></div>
          </Grid>
        </Grid>
      </Box>
      </Container>


        <Great>
           <Great1>
           <div><p>Steady transaction balance on your daily, weekly and monthly account.</p></div>
           <div><img src={Discussion} alt='Finance Discussion' /></div>
           </Great1>

           <Great2>
           <div><img src={Yanga} alt='Finance Discussion' /></div>
           <div><p>Wth us keeping your finacial record clean and save.. Abeg do Yanga joor.</p></div>

           </Great2>
        </Great>



       <Title>
          <h1>Our Prospective Clients</h1>
       </Title>

      <BrandHolder>
          <Brand>
            <BrandList>
              <li><h3><a href="/">Brand 1</a></h3></li>
              <li><h3><a href="/">Brand 2</a></h3></li>
              <li><h3><a href="/">Brand 3</a></h3></li>
              <li><h3><a href="/">Brand 4</a></h3></li>
              <li><h3><a href="/">Brand 5</a></h3></li>
            </BrandList>
          </Brand>
      </BrandHolder>


    <Footer/>
    
    </Container1>
  );
}


const Container1 = styled.div`
    overflow:hidden;
    
`;




const Great = styled.div`

    height:100vh;
    width:100vw;
    display:flex;
    gap:20px;
 
 
`;


const Great1 = styled.div`
  height:100%;
  width:50%;

  p{
    font-size:1.5rem;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


`;

const Great2 = styled.div`

height:100%;
width:50%;


p{
  font-size:1.5rem;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


`;




const BrandHolder = styled.div`
  width:100vw;
  height:10vh;
   
`;



const Title = styled.div`
h1{
  text-align:center;
  font-family: 'Spectral', serif;

}


@media (max-width: 480px) {
  margin-top:-550px;
}


@media (max-width: 768px) {
margin-top:-550px;
}

@media (max-width: 1024px) {

  margin-top:-140px;
}



`;




const Brand = styled.div`
  width:100%;
  
`;



const BrandList = styled.ul`
 display:flex;
justify-content:space-evenly;



 li{
    list-style:none;

    a{
      text-decoration:none;
      color:black;
      font-family: 'Spectral', serif;

    }
 }
    

 
`;


export default BookKeeping




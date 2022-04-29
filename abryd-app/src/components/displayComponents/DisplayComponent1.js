import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Snowfall from 'react-snowfall';
import NavBar from '../NavBar';
import './display1.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';




const DisplayComponent1 = () => {


   const [state, setState] = useState();

   setInterval(() => {
    setState(new Date().getSeconds())
  }, 1000);  
 

  return (
   
  
    <div className='container'>
        <Snowfall color='#2196f3'/>
        <div style={{ display:"flex", justifyContent:'center'}}>
              <div className='innerContainer' style={{width:'80vw',height:'auto', border:'2px solid white', borderRadius:'20px', marginTop:'5vh', backgroundColor:'transparent'  }}>
                <NavBar />

                <TextInfo>
                  <div>
                  <p>With Your Book-keeping You can Trust Us</p>
                  </div>
              
                </TextInfo>

                <Boxes>
                    <motion.div 
                   animate={{ rotate: 180 }}
                   transition={{
                     repeat: 1,
                     repeatType: "reverse",
                     duration: 2
                   }}
                   style={{ backgroundColor:'rgba(119, 113,112,0.3)' }} >
                      
                      <p style={{ fontSize:'1rem', paddingTop:'-20px', }}>{new Date().getMonth() + 1}</p>
                      <p style={{ fontSize:'2.5rem',  }}>{new Date().getDate()}</p>
                      <p style={{ fontSize:'1rem',  }}>{new Date().getFullYear()}</p>
                    </motion.div>


                    <motion.div 
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ["10px", "10px", "50%", "10px", "10px"],
                    }}
                    style={{ backgroundColor:'rgba(119, 113,112,0.8)', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center' }}>
                        
                        <Link to={"/book-keeping"} style={{ textDecoration:'none', color:'white', textAlign:'center', fontSize:'1.5em', fontWeight:'bold' }}>Book <br/> Keeping</Link>
                    </motion.div>

                    
                      <motion.div 
                    animate={{ rotate: -180 }}
                    transition={{
                      repeat: 1,
                      repeatType: "reverse",
                      duration: 2
                    }}
                     style={{ backgroundColor:'rgba(119, 113,112,0.3)' }}>
                        <p style={{ fontSize:'1rem', paddingTop:'-20px'}}>{new Date().getHours()}</p>
                        <p style={{ fontSize:'2.5rem' }}>{new Date().getSeconds()}</p>
                        <p style={{ fontSize:'1rem'}}>{new Date().getMinutes()}</p>

                    </motion.div>
                </Boxes>
              </div>

            
              
           
          </div>
    </div>
    
  )
}



const TextInfo = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;


      div{
        width:30vw;
        text-align:center;

        p{

          font-size:1.7rem;
          color:white;
          font-family: 'Mochiy Pop P One', sans-serif;

          @media (max-width: 568px) {
          font-size:1rem;
        
        }

        }

      }

    

    
      }
`;



const Boxes = styled.div`
      display:flex;
      justify-content:center;
      gap:20px;
      margin-top:50px;
      margin-bottom:50px;

  

      @media (max-width: 568px) {
        display:grid;
        margin-top:0px;
        margin-bottom:0px;
      }

      div{

        width:30vh;
        height:30vh;
        border-radius:10px;
        box-sizing: border-box;
        border: 1px solid white;


        p{
          line-height : 20px;
          color:white;
          text-align:center;


          @media (max-width: 568px) {
            line-height : 12px;
          
          }


        }

      }

     
`;

export default DisplayComponent1
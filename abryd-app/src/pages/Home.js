import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import DisplayComponent1 from "../components/displayComponents/DisplayComponent1";
import DisplayComponent2 from "../components/displayComponents/DisplayComponent2";
import DisplayComponent3 from "../components/displayComponents/DisplayComponent3";

const HomePage = () => {

  const [display, displayState] = useState(<DisplayComponent1/>);
  let [counter, setCounter] = useState(1);


    setInterval(() => { 
      setCounter(counter+1);

        if (counter === 1) {
          
          displayState(<DisplayComponent1/>);

        } else if (counter === 2) {
          displayState(<DisplayComponent2/>);

        }else if (counter === 3 ) {

          displayState(<DisplayComponent3/>);

        }else if (counter > 3 ) {

          displayState(<DisplayComponent1/>);
          setCounter(1);
          clearInterval();
        }

    },20000);


  return (
    <>
     

      <Section>
        {display}
      </Section>
    </>
  );
};



const Section = styled.div`

    width:100%;
    height:85vh;

`;
export default HomePage;

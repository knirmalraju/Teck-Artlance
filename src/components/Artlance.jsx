import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height : 55vh;
    display : flex;
    justify-content : center;
    background-color : white;
    @media only screen and (max-width : 900px){
        height : 70vh;
    }
    ${mobile({height: "40vh", marginTop : "18vh"})}
`;
const Wrapper = styled.div`
    width : 90%;
    display : flex;
    //background-color : #00d672;  
    @media only screen and (max-width : 900px){
        flex-direction : column;
    }
    ${mobile({flexDirection: "column", width : "95%", height : "40vh"})}
`;
const MobileImage = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
    @media only screen and (max-width : 900px){
        flex : 2;
    }
    ${mobile({width: "100%", height : "30vh"})}
`;
const About = styled.div`
    flex : 1;
    display : flex;
    padding : 20px;
    line-height : 35px;
    color : #17284d;
    font-size : 30px;
    font-weight : 600;
    align-items : center;
    justify-content : center;
    text-align : center;
    ${mobile({fontSize: "22px",flex : 1})}
`;
const Image = styled.div`
    /*margin-top : 15vh;
    border-radius: 0% 100% 0% 100% / 100% 0% 100% 0%;
    width: 600px;
    height: 400px;
    background: #ad5389;
    background: -webkit-linear-gradient(to right,
      #3c1053,
      #ad5389);
    background: linear-gradient(to right,
      #3c1053,
      #ad5389);*/
      ${mobile({ width : "40vh"})}
`;
const Car = styled.img`
    height : 25vh;
    ${mobile({height: "10vh"})}
`;
const Artlance = () => {
  return (
    <Container>
        <Wrapper>
            <MobileImage>
                <Image>
                    <Car src='./images/Red car.png'>
                        
                    </Car>
                </Image>
            </MobileImage>
            <About>
                " A game is the complete exploration of freedom within a restrictive environment "
            </About>
        </Wrapper>
    </Container>
  )
}

export default Artlance
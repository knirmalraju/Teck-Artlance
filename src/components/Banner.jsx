import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height : 100vh;
    display : flex;
    align-items : center;
    /*position: sticky;
    top : 0;
    z-index : -1;
    overflow : hidden;*/
    ${mobile({height : "30vh"})}
`;
const Wrapper = styled.div`
    height : 100%;
    width : 100%; 
    position : relative;
`;
const Background = styled.div`
    height : 100%;
    width : 100%;
    position : absolute;
    top : 0;
    left : 0;
    background-size : cover;
    background-color : rgba(0,0,0,0.6); 
`;
const Desc = styled.div`
    height : 100%;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    position : absolute;
    top : 0;
    left : 0;
`;
const Title = styled.div`
    //color : #ff761b;
    color : white;
    font-size : 45px;
    font-weight : 500;
    //font-family: sans-serif;
    text-align : center;
    ${mobile({fontSize : "20px"})}
`;
const Button = styled.button`
    height : 50px;
    width : 150px;
    font-size : 15px;
    font-weight : 400;
    border : 2px solid white;
    border-radius: 35px;
    background-color : black;
    color : white;  
    margin-top : 30px;
    cursor : pointer;
    transition : all 0.3s ease;
    &:hover{
        color : black;
        font-weight : 500;
        background-color : white;
        transform : scale(1.03);
    }
    ${mobile({height : "40px", width : "120px"})}
`;
const Banner = () => {
  return (
    <Container>
        <Wrapper>
        <Background>
            <video loop autoPlay muted
                style={{
                    height : "100%",
                    width : "100%",
                    objectFit : "cover",
                    top : "0",
                    left : "0",
                    display : "block",
                    position : "absolute",
                    zIndex : "-1"
                }}
            >
            <source
            src="./videos/Horizon.mp4"
            type="video/mp4"
            />
             Your browser does not support the video tag.
            </video>
        </Background>
            <Desc>
              <Title>
                  CHECK OUT OUR BEST OF 2022
              </Title>
              <Link style={{color : "white", textDecoration : "none"}} to="/Mobilegames">
              <Button>
                  WATCH NOW
              </Button>
              </Link>
            </Desc>
        </Wrapper>
    </Container>
  )
}

export default Banner
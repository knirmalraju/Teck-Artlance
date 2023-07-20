import React from 'react'
import Footer from '../components/Footer'
import Mobgames from '../components/Mobgames'
import Mobilebg from '../components/Mobilebg'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Title = styled.div`
    height : 42px;
    font-size : 28px;
    font-weight : 600;
    padding-top : 15px;
    background-color : #f3f3f3;
    text-align : center;
    text-decoration : underline;
    text-decoration-thickness : 3px;
    text-underline-offset : 10px;
    @media only screen and (max-width : 950px){
        display : block;      
        font-size : 25px;
    }
    ${mobile({display : "block", fontSize : "22px"})}
`;

const PCgames = () => {
  return (
    <div>
        <Navbar/>
        <Mobilebg/>
        <Title>PC Games</Title>
        <Mobgames/>
        <Footer/>
    </div>
  )
}

export default PCgames
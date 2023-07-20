import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height : 70vh;
    display : flex;
    align-items : center;
    justify-content : center;
    position : sticky;
    top : 0;
    z-index : -1;
    overflow : hidden;
    //background-color : #eb5b2f9f;
    ${mobile({height : "26vh"})}
`;
const Wrapper = styled.div`
    height : 100%;
    width : 100%; 
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : rgba(0,0,0,0.9);
`;
const Content = styled.div`
    font-size : 50px;
    font-weight : 600;
    color : #f53c3c;
    ${mobile({fontSize : "28px"})}
`;

const Publishbg = () => {
  return (
    <Container>
        <Wrapper>
            <Content>Chart-topping partnerships</Content>
        </Wrapper>
    </Container>
  )
}

export default Publishbg
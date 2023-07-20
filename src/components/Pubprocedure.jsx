import React from 'react'
import styled from "styled-components"
import { ProcedureItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    background-color : #f1f1f1;
    display : flex;
    flex-direction: column;
    align-items : center;
    justify-content : center;
`;
const Wrapper = styled.div`
    min-width : 95%;
    ${mobile({width : "100%"})}
`;
const Title = styled.h3`
    padding : 20px;
    font-size : 28px;
    font-weight : 500;
    display : flex;
    align-items : center;
    justify-content : center;
    //font-family: sans-serif;
`;
const Steps = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
`;
const Card = styled.div`
    margin : 25px 20px;
    height : 32vh;
    width : 50vh;
    border-radius : 10px;
    display : flex;
    background-color : #85abc236;
    &:hover{
        transform : scale(1.01);
    }
    ${mobile({height : "25vh", margin : "15px 20px"})}
`;
const Left = styled.div`
    flex : 1;
    font-size : 45px;
    font-weight : 600;
    color : #ff5858;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Right = styled.div`
    flex : 4;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;
const Step = styled.div`
    width : 88%;
    height : 25%;
    display : flex;
    align-items : center;
    top : 0;
    font-size : 18px;
    font-weight : 600;
`;
const Desc = styled.div`
    height : 75%;
    padding : 0px 15px;
    display : flex;
`;
const Publish = styled.div`
    height : 30vh;
    min-width : 99%;
    display : flex;
    border-radius : 10px;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background-color : #85abc236;
    ${mobile({width : "100%", height : "23vh"})}
`;
const Submit = styled.div`
    height : 14vh;
    font-size : 28px;
    font-weight : 500;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    ${mobile({fontSize : "22px", padding : "0px 20px", height : "10vh"})}
`;
const Button = styled.div`
    height : 45px;
    width : 160px;
    font-size : 15px;
    font-weight : 400;
    border : 2px solid black;
    border-radius: 35px;
    background-color : #4392c436;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #000000;  
    cursor : pointer;
    transition : all 0.3s ease;
    &:hover{
        color : #4f8db4;
        font-weight : 500;
        background-color : #000000;
        transform : scale(1.03);
    }
    ${mobile({width : "180px"})}
`;
const Pubprocedure = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Steps to publish
        </Title>
        <Steps>
          {ProcedureItems.map((item)=>(
          <Card>
            <Left>
              {item.id}
            </Left>
            <Right>
              <Step>{item.title}</Step>
              <Desc>
                {item.desc}
              </Desc>
            </Right>
          </Card>
          ))}
        </Steps>
      </Wrapper>
      <Publish>
            <Submit>LET'S WRITE A NEW SUCCESS STORY</Submit>
            <Button>
                  Submit Your Game
            </Button>
      </Publish>
    </Container>
  )
}

export default Pubprocedure
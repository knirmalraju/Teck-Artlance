import { Inbox, Publish, SportsEsports } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
    height : 60vh;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-bottom : 30px;
    ${mobile({height : "auto", marginBottom : "0px"})}
`;
const Wrapper = styled.div`
    height : 100%;
    width : 90%;
    //background-color : #35a335;
`;
const Title = styled.h3`
    height : 20%;
    font-size : 30px;
    font-weight : 600;
    display : flex;
    align-items : center;
    justify-content : center;
    //background-color : #35a335;
    //font-family: sans-serif;
    ${mobile({height : "8vh"})}
`;
const Content = styled.div`
    height : 80%; 
    ${mobile({height: "90%"})}
`;
const Threecards = styled.div`
    display : flex;
    height : 100%;
    width : 100%;
    ${mobile({flexDirection : "column", alignItems : "center", justifyContent : "center"})}
`;
const Card = styled.div`
    flex : 1;
    width : 100%;
    display : flex;
    margin : 5px 20px;
    //border : 2px solid black;
    //border-radius : 45px;
    //background-color : rgba(0,0,0,0.65); 
    align-items : center;
    flex-direction : column;
    justify-content : center;
    ${mobile({margin : "15px 20px"})}
`;  
const Logo = styled.div`
    height : 100px;
    width : 100px;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #38c23f;
    border-radius : 50%;
`;
const Name = styled.div`
    height : 50px;
    margin : 10px;
    font-size : 20px;
    font-weight : 500;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Button = styled.div`
    height : 50px;
    width : 130px;
    font-size : 14px;
    font-weight : 400;
    border-radius : 35px;
    border : 2px solid black;
    background-color : #ffffff;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #000000;  
    cursor : pointer;
    transition : all 0.3s ease;
    &:hover{
        color : #ffffff;
        font-weight : 500;
        background-color : #000000;
        transform : scale(1.03);
    }
    ${mobile({color : "white", backgroundColor : "black", width : "22vh"})}
`;
const Threecomp = () => {
  const support = "Game support";
  const general = "General Enquiries";
  return (
    <Container>
        <Wrapper>
            <Title>
                HELLO!
            </Title>
            <Content>
                <Threecards>
                    <Card>
                        <Logo>
                            <SportsEsports style={{fontSize:"40px"}}/>
                        </Logo>
                        <Name>
                            GAME SUPPORT
                        </Name>
                        <Link style={{color : "white", textDecoration : "none"}} to={`/Contactus/${support}`}>
                        <Button>
                            GET IN TOUCH
                        </Button>
                        </Link>
                    </Card>
                    <Card>
                        <Logo>
                            <Inbox style={{fontSize:"40px"}}/>
                        </Logo>
                        <Name>
                            GENERAL ENQUIRIES
                        </Name>
                        <Link style={{color : "white", textDecoration : "none"}} to={`/Contactus/${general}`}>
                        <Button>
                            GET IN TOUCH
                        </Button>
                        </Link>
                    </Card>
                    <Card>
                        <Logo>
                            <Publish style={{fontSize:"40px"}}/>
                        </Logo>
                        <Name>
                            PUBLISH WITH US
                        </Name>
                        <Link style={{color : "white", textDecoration : "none"}} to="/Publishwithus">
                        <Button>
                            LEARN MORE
                        </Button>
                        </Link>
                    </Card>
                </Threecards>
            </Content>
        </Wrapper>
    </Container>
  )
}

export default Threecomp
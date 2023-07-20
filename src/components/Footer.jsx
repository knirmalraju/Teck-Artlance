import { Facebook, Instagram, LinkedIn, LocationOn, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
    display : flex;
    justify-content : center;
    padding : 30px;
    background-color : black;
    color : white;
    ${mobile({height : "45vh"})}
`;
const Wrapper = styled.div`
    display : flex;
    width : 90%;  
    ${mobile({width : "100%", flexWrap : "wrap"})}
`;
const Left = styled.div`
    flex : 1;
    ${mobile({height : "30vh"})}
`;
const Ulist = styled.ul`
    display : flex;
    flex-direction : column;
    list-style : none;
    margin-left : -25px;
`;
const List = styled.li`
    padding : 8px 0px;
    cursor : pointer;
    &:hover{
        text-decoration : underline;
    }
`;
const Title = styled.div`
    font-size : 18px;
    font-weight : 500;  
    text-decoration : underline;
    text-decoration-thickness : 3px;
    text-underline-offset : 15px;
    margin : 0px 0px 30px 15px;
`;
const Center = styled.div`
    flex : 1;
    ${mobile({height : "30vh"})}
`;
const SocialContainer = styled.div`

`;
const SocialIcon = styled.div`
    display : flex;
    padding : 10px;
`;
const Name = styled.div`
    padding-left : 10px;
`;
const Right = styled.div`
    flex : 1;
    ${mobile({height : "18vh"})}
`;
const Contact = styled.div`
    display : flex;
    padding : 10px;
`;
const Info = styled.div`
    padding-left : 10px;
    ${mobile({lineHeight : "1.6"})}
`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Title>TECH ATLANCE</Title>
                <Ulist>
                    <Link style={{color : "white", textDecoration : "none"}} to="/Pcgames">
                    <List>
                        Pc & Console
                    </List>
                    </Link>
                    <Link style={{color : "white", textDecoration : "none"}} to="/Mobilegames">
                    <List>
                        Mobile games
                    </List>
                    </Link>
                    <Link style={{color : "white", textDecoration : "none"}} to="/Careers">
                    <List>
                        Join us
                    </List>
                    </Link>
                    <Link style={{color : "white", textDecoration : "none"}} to="/Contactus">
                    <List>
                        Contact us
                    </List>
                    </Link>
                </Ulist>
        </Left>
        <Center>
            <SocialContainer>
                <Title>FOLLOW US</Title>
                <SocialIcon>
                    <Facebook/>
                    <Name>Facebook</Name>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                    <Name>Instagram</Name>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                    <Name>Twitter</Name>
                </SocialIcon>
                <SocialIcon>
                    <LinkedIn/>
                    <Name>LinkedIn</Name>
                </SocialIcon>
            </SocialContainer>
        </Center>
        <Right>
            <Title>CONTACT</Title>
            <Contact>
                <LocationOn/>
                <Info>Kwalee Ltd Southam Road Radford Semele Leamington Spa CV31 1FQ4</Info>
            </Contact>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Footer
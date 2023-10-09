import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height : auto;
    padding : 20px;
    background-color : white;
    ${mobile({height : "auto"})}
`;
const Wrapper = styled.div`
    width : 90%;
    display : flex;
    justify-content : center;
    flex-direction : column;
    ${mobile({width : "98%", justifyContent : "center"})}
`;
const Title = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 28px;
    font-weight : 600; 
    text-decoration : underline;
    text-decoration-thickness : 3px;
    text-underline-offset : 10px;
    margin : 0px 0px 30px 15px;
    ${mobile({margin : "5px 5px 30px 15px"})}
`;
const Ulist = styled.ul`
    flex : 4;
    display : flex;
    flex-wrap : wrap;
    list-style : none;
    align-items : center;
    justify-content : center;
    //background-color : #2ca72c;
    ${mobile({flexDirection : "column"})}
`;
const List = styled.img`
    max-height: 25vh;
    width: min(100% - 15px, 221px);
    padding : 20px 0px;
    ${mobile({height : "16vh", width : "86%", padding : "5px 0px"})}
`;
const Partners = () => {
  return (
    <Container>
        <Wrapper>
        <Title>Partners</Title>
                <Ulist>
                    <List src='https://integranxt.com/wp-content/uploads/2020/09/integra-logo_16072018.png'>

                    </List>
                    <List src='https://themonkeycreative.com/wp-content/uploads/2022/03/TMCLogo1-01-1.png'>
                        
                    </List>
                    <List src='http://ipxtechnology.com/assets/images/ipx_logo-1.png'>
                        
                    </List>
                </Ulist>
        </Wrapper>
    </Container>
  )
}

export default Partners
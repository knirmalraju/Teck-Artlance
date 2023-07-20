import { AttachMoney, EmojiObjects, PhoneAndroid, SportsEsports } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height : 40vh;
    background-color : #f3f3f3;
    display : flex;
    justify-content : center;
    align-items : center;
    ${mobile({height : "55vh"})}
`;
const Wrapper = styled.div`
    height : 98%;
    width : 90%;
    display : flex;
    flex-direction : column;
    ${mobile({width : "95%"})}
`;
const Title = styled.div`
    flex : 1;
    text-align : center;
    display : flex;
    color : #f53c3c;
    font-size : 26px;
    font-weight : 500;
    align-items : center;
    justify-content : center;
    //background-color : #3cb63c;
    ${mobile({fontSize : "17px"})}
`;
const Info = styled.div`
    flex : 1.5;
    display : flex;
    ${mobile({flexDirection : "column"})}
`;
const Columns = styled.div`
    flex : 1;
    display : flex;
    ${mobile({height : "40vh", padding : "20px 0px"})}
`;
const Icon = styled.div`
    flex : 1;
    display : flex;
    color : #091225;
    align-items : center;
    justify-content : center;
    padding-right : 5px;
`;
const Desc = styled.div`
    flex : 3.5;  
    font-size : 18px;
    font-weight : 400;
    display : flex;
    align-items : center;
`;

const Records = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Tech Artlance is a great place to be and to publish great games. The numbers only tell half the story!
            </Title>
            <Info>
                <Columns>
                    <Icon>
                        <PhoneAndroid/>
                    </Icon>
                    <Desc>
                        More than 750 Million downloads
                    </Desc>
                </Columns>
                <Columns>
                    <Icon>
                        <SportsEsports/>
                    </Icon>
                    <Desc>
                        20+ number one games!
                    </Desc>
                </Columns>
                <Columns>
                    <Icon>
                        <EmojiObjects/>
                    </Icon>
                    <Desc>
                        20+ published games from Creative Wednesdays
                    </Desc>
                </Columns>
                <Columns>
                    <Icon>
                        <AttachMoney/>
                    </Icon>
                    <Desc>
                        1.5 million+ GBP in profits paid directly to employees
                    </Desc>
                </Columns>
            </Info>
        </Wrapper>
    </Container>
  )
}

export default Records
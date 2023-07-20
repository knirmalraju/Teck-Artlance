import { Apple, Shop } from '@material-ui/icons';
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {slideItems} from "../data"
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { projectFirestore } from '../firebase/config';

const Container = styled.div`
    height : auto;
    display : flex;
    align-items : center;
    justify-content : center;
    //margin-bottom : 20px;
    background-color : white;
    ${mobile({height : "auto"})}
`;
const Wrapper = styled.div`
    height : 100%;
    width : 100%;
    display : flex;
    flex-direction : column;
`;
const Title = styled.h3`
    flex : 1;
    height : 100%;
    font-size : 30px;
    font-weight : 600;
    display : flex;
    align-items : center;
    justify-content : center;
    padding-bottom : 20px;
    //font-family: sans-serif;
    ${mobile({fontSize : "25px", paddingBottom : "20px"})}
`;
const Gamecards = styled.div`
    width : 100%;
    display : flex;
    flex : 4;
    justify-content : center;
`;
const Cards = styled.div`
    width : 95%;
    //background-color : #2d9e3c;
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    align-items : center;
    padding : 0px 10px;
    ${mobile({display : "flex", flexDirection : "column", width : "98%"})}
`;
const Store = styled.div`
    opacity : 0;
    width : 94%;
    height : 76.8%;
    border-radius : 25px;
    top : 0;
    left : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    transition : all 0.4s ease;
    background-color : rgba(0,0,0,0.2);
    position : absolute;
    z-index : 3;
    ${mobile({width : "95.5%",height : "65%", opacity : 1,top : "7px", left : "6px", backgroundColor : "rgba(0,0,0,0)"})}
`;
const Game = styled.div`
    flex : 5;
    width : 94%;
    border-radius : 25px;
    transition : all 0.4s ease;
    background-image : url("${props=>props.bgimg}");
    background-size: cover;
    z-index : 2;
    box-shadow : 0 8px 8px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    ${mobile({width : "100%"})}
`;
const Card = styled.div`
    height : 60vh;
    width : 40vh;
    display : flex;
    flex-direction : column;
    position : relative;
    z-index : 1;
    &:hover ${Store} {
        opacity : 1;
    }
    &:hover ${Game}, ${Store} {
        transform : scale(1.05);
    }
    ${mobile({height : "40vh", width : "35vh"})}
`;
const Info = styled.div`
    flex : 1.5;
    font-size : 20px;
    display : flex;
    align-items : center;
    justify-content : center;
    //background-color : blue;
`;
const Name = styled.div`
    font-weight : 500;
`;

const Icon = styled.div`
    width : 35px;
    height : 35px;
    background-color : #f1f1f1;
    border-radius : 50%;
    margin : 200px 10px 10px 10px;
    display : flex;
    align-items : center;
    justify-content : center;
    cursor : pointer;
    transition : all 0.5s ease;
    &:hover{
        transform : scale(1.1);
    }
    ${mobile({width : "45px", height : "45px"})}
`;
const Moregames = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Button = styled.div`
    height : 50px;
    width : 150px;
    font-size : 15px;
    font-weight : 400;
    border : 2px solid black;
    border-radius: 35px;
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
    ${mobile({backgroundColor : "black", color : "white", width : "250px"})}
`;

const Games = () => {
    const [hpgames, setHpgames] = useState([]);

    useEffect(()=> {
        projectFirestore.collection("Hp_games").onSnapshot(snapshot => {
            setHpgames(snapshot.docs.map(doc => ({id : doc.id, ...doc.data()})))
        });
    }, []);
    console.log(hpgames);
  return (
    <Container>
        <Wrapper>
            <Title>
                Mobile Games
            </Title>
            <Gamecards>
                <Cards>
                {slideItems.map((item)=>(
                    <Card>
                        <Game bgimg={item.bgimg} key={item.id}/>
                        <Store>
                            <Icon>
                                <Shop/>
                            </Icon>
                            <Icon>
                                <Apple/>
                            </Icon>
                        </Store>
                        <Info>
                            <Name>{item.title}</Name>
                        </Info>
                    </Card>
                ))}
                </Cards>
            </Gamecards>
            <Moregames>
            <Link style={{color : "white", textDecoration : "none"}} to="/Mobilegames">
                <Button>More games</Button>
            </Link>
            </Moregames>
        </Wrapper>
    </Container>
  )
}

export default Games
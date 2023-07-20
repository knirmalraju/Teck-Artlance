import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { mobilegame } from '../data';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { mobile } from '../responsive';
import { projectFirestore } from '../firebase/config';

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #f3f3f3;
    position: relative;
    z-index : 2;
`;
const Wrapper = styled.div`
    width : 87%; 
    @media only screen and (max-width : 1120px){
        width : 96%;
    }
    ${mobile({width : "95%"})}
`;
const Game = styled.div`
    height : 98vh;
    width : 100%; 
    display : flex;
    align-items : center;
    position : relative;
    @media only screen and (max-width : 950px){
        height : 55vh;
        flex-direction : row-reverse;
    }
    @media only screen and (max-width : 720px){
        flex-direction : column;
        height : 115vh;
        margin : 20px 0px;
    }
    ${mobile({height : "58vh", margin : "15px 0px", flexDirection : "column", justifyContent : "center", width : "100%", boxShadow : "0 6px 8px 0 rgba(0,0,0,0.3), 0 6px 25px 0 rgba(0,0,0,0.19)"})}
`;
const Banner = styled.div`
    height : 90%;
    width : 100%;
    z-index : 1;
    position : absolute;
    display : flex;
    align-items : center;
    @media only screen and (max-width : 950px){
        position : relative;      
        flex : 1;
    }
    @media only screen and (max-width : 720px){
        height : 100%;
        width : 100%;
        position : relative;
    }
    ${mobile({position : "relative", height : "25vh", width : "100%"})}
`;
const Image = styled.img`
    height : 100%;
    width : 76%;
    right : 0;
    z-index : 2;
    border-radius : 8px;
    object-fit : cover;
    position : absolute;
    @media only screen and (max-width : 1120px){
        width : 65%;
        height : 85%;
    }
    @media only screen and (max-width : 950px){
        height : 100%;
        position : relative;
        width : 100%;
        border-radius : 0px;
        box-shadow : 0 6px 8px 0 rgba(0,0,0,0.3), 0 6px 25px 0 rgba(0,0,0,0.19);
    }
    @media only screen and (max-width : 720px){
        position : relative;
        height : 100%;
        width : 100%;
        border-radius : 0px;
    }
    ${mobile({position : "relative", width : "100%", borderRadius : "0px", height : "100%"})}
`;
const Gameinfo = styled.div`
    height : 70vh;
    width : 60vh;
    padding : 10px 10px 10px 20px;
    border-radius : 3%;
    z-index : 3;
    display : flex;
    flex-direction: column;
    position : absolute;
    box-shadow : 0 6px 8px 0 rgba(0,0,0,0.3), 0 6px 25px 0 rgba(0,0,0,0.19);
    background-color : white;
    @media only screen and (max-width : 950px){
        flex : 1;
        position : relative;
        width: 100%;
        height : 46.2vh;
        border-radius : 0px;
    }
    @media only screen and (max-width : 720px){
        height : 50vh;
        width : 95.5%;
        border-radius : 0px;
    }
    ${mobile({width : "40.2vh", padding : "5px 10px 5px 20px", height : "35vh", position : "relative", borderRadius : "0px", boxShadow : "0 6px 8px 0 rgba(0,0,0,0), 0 6px 25px 0 rgba(0,0,0,0)"})}
`;
const Title = styled.div`
    height : 30px;
    font-size : 17px;
    color : #f53c3c;
    font-weight : 500;
    display : flex;
    align-items : center;
    ${mobile({height : "25px"})}
`;
const Name = styled.div`
    height : 100px;
    //color : #f53c3c;
    font-size : 25px;
    font-weight : 500;
    display : flex;
    align-items : center;
    @media only screen and (max-width : 950px){
        height : 50px;
    }
    @media only screen and (max-width : 720px){
        height : 60px;
    }
    ${mobile({fontSize : "22px", height : "40px"})}
`;
const Desc = styled.div`
    height : 100px;
    margin-bottom : 20px;
    font-size : 18px;
    display : flex;
    align-items : center;
    @media only screen and (max-width : 950px){
        height : 50px;
    }
    @media only screen and (max-width : 720px){
        height : 50px;
        margin-bottom : 10px
    }
    ${mobile({marginBottom : "0px", fontSize : "16px", height : "65px"})}
`;
const Available = styled.div`
    font-weight : 500;
    ${mobile({fontWeight : "500", fontSize : "17px"})}
`;
const Appstore = styled.div`
    height : 70px;
    flex : 1;
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    @media only screen and (max-width : 950px){
        height : 55px;
    }
    ${mobile({height : "55px"})}
`;
const Applestore = styled.img`
    height : 45px;
    width : 140px;
    border-radius : 5%;
    cursor : pointer;
    transition : all 0.5s ease;
    &:hover{
        transform: scale(1.03);
    }
    @media only screen and (max-width : 950px){
        height : 38px;
        width : 120px;
    }
    ${mobile({width : "120px", height : "38px"})}
`;
const Playstore = styled.img`
    margin-right : 20px;
    height : 68px;
    width : 155px;
    border-radius : 5%;
    cursor : pointer;
    transition : all 0.5s ease;
    &:hover{
        transform: scale(1.03);
    }
    @media only screen and (max-width : 950px){
        height : 57px;
        width : 130px;
    }
    ${mobile({width : "130px", height : "57px"})}
`;
const Rate = styled.div`
      
`;
const Mobgames = () => {
    /*const [mobgames, setMobgames] = useState([]);

    useEffect(()=> {
        projectFirestore.collection("Hp_games").onSnapshot(snapshot => {
            setHpgames(snapshot.docs.map(doc => ({id : doc.id, ...doc.data()})))
        });
    }, []);
    console.log(hpgames);*/
  return (
    <Container>
        <Wrapper>
            {mobilegame.map((item)=>(
            <Game key={item.id}>
                <Banner>
                    <Image src={item.bgimg} alt="forza">
                    </Image>
                </Banner>
                <Gameinfo>
                    <Title>{item.title}</Title>
                    <Name>{item.name}</Name>
                    <Desc>{item.desc}</Desc>
                    <Available>
                        <Title style={{color:"black"}}>Available in:</Title>
                        <Appstore>
                            <Playstore img src="./images/playstore.png" alt="playstore"></Playstore>
                            <Applestore img src="./images/applestore.png" alt="applestore"></Applestore>
                        </Appstore>
                    </Available>
                    <Rate>
                        <Available style={{marginBottom:"10px"}}>Rating :</Available>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        </Stack>
                    </Rate>
                </Gameinfo>
            </Game>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Mobgames
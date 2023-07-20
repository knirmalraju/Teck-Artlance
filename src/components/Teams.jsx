import React, { useState } from 'react'
import styled from 'styled-components'
import { TeamItems } from '../data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #f3f3f3;
`;
const Wrapper = styled.div`
    min-width : 90%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    ${mobile({width : "100%"})}
`;
const Title = styled.div`
    min-width : 75%;
    padding : 15px;
    font-size : 30px;
    font-weight : 600;
    text-decoration : underline;
    text-decoration-thickness : 3px;
    text-underline-offset : 15px;
    display : flex;
    align-items : center;
    ${mobile({display : "flex", alignItems : "center", justifyContent : "center", fontSize : "28px"})}
`;
const Teamcards = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex-wrap : wrap;
    ${mobile({display : "none"})}
`;
const Card = styled.div`
    margin : 20px;
    ${mobile({margin : "10px 0px"})}
`;
const Image = styled.div`
    height : 50vh;
    width : 50vh;
    //border-radius : 25px;
    transition : all 0.4s ease;
    background-image : ${props=>props.bgimg};
    background-size: cover;
    //box-shadow : 0 8px 8px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    ${mobile({height : "35vh", width : "40vh"})}
`;
const TeamType = styled.div`
    font-size : 20px;
    font-weight : 500;
    margin : 5px 0px;
`;
const JobCount = styled.div`
    font-size : 18px; 
    font-weight : 500;
    color : #f53c3c;
    text-decoration : underline;
`;
const SliderTeamcards = styled.div`
    height : 30vh;
    width : 95%;
    margin : 10px 0px;
    display : none;
    overflow : hidden;
    ${mobile({display : "block"})}
    z-index : 1;
`;
const Arrow = styled.div`
    height: 40px;
    width: 40px;
    background-color : white;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute;
    top : 100px;
    bottom : 0;
    left : ${props=>props.direction === "left" && "14px"};
    right : ${props=>props.direction === "right" && "14px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    z-index : 2;
    &:hover{
        opacity : 0.8;
    }
`;
const Slider = styled.div`
    height : 100%;
    width : auto;
    display : flex;
    transition: all 1s ease;
    transform: translateX(${(props) => props.slideIndex * -45}vh);
`;
const Slide = styled.div`
    height : 100%;
`;
const Mcard = styled.div`
    height : 100%;
    width : 44vh;
    margin-right : 10px;
    background-image : ${props=>props.bgimg};
    background-size: cover;
`;

const Teams = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    console.log("slide index : " + TeamItems.length);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : TeamItems.length-1);
        }
        else{
            setSlideIndex(slideIndex < TeamItems.length-1 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Wrapper>
            <Title>
                TEAMS
            </Title>
            <Teamcards>
                {TeamItems.map((item)=>(
                <Card>
                    <Image bgimg={item.bgimg} key={item.id}></Image>
                    <TeamType>{item.tname}</TeamType>
                    <JobCount>{item.njob} Jobs</JobCount>
                </Card>
                ))}
            </Teamcards>
            <SliderTeamcards>
                <Arrow direction="left" onClick={()=>handleClick("left")}>
                    <ArrowBackIos/>
                </Arrow>
                <Slider slideIndex={slideIndex}> 
                {TeamItems.map((item)=>(
                    <Slide><Mcard bgimg={item.bgimg}></Mcard> </Slide>
                ))}
                </Slider>
                <Arrow direction="right" onClick={()=>handleClick("right")}>
                    <ArrowForwardIos/> 
                </Arrow>
            </SliderTeamcards>
        </Wrapper>
    </Container>
  )
}

export default Teams

import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height : auto;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : white;
    ${mobile({height: "60vh"})}
`;
const Wrapper = styled.div`
    height : 100%;
    width : 90%; 
    display : flex;
    ${mobile({flexDirection: "column"})}
    @media only screen and (max-width : 1000px){
        flex-direction : column;
    }
`;
const About = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    ${mobile({flex: "3"})}
`;
const Title = styled.h2`
    height : 80px;
    display : flex;
    align-items : center;
    justify-content : center;
    ${mobile({height : "65px"})}
`;
const Desc = styled.p`
    width : 90%;
    line-height : 1.6;
    ${mobile({lineHeight : "1.5", width : "98%", paddingBottom : "20px"})}
`;
const Video = styled.div`
    flex : 1;
    display : flex;
    border-radius : 10px;
    align-items : center;
    justify-content : center;
    ${mobile({width : "100%", height :"30vh"})}
`;
const Aboutvideo = () => {
  return (
    <Container>
        <Wrapper>
            <About>
                <Title>
                    Join the Tech Artlance Family
                </Title>
                <Desc>
                Our driven, fun-loving and diverse team keeps growing, and we need people like you!

With benefits including a generous profit share scheme, quarterly events and the chance to pitch your game ideas each week during our company-wide ‘Creative Wednesdays’, why not check out our vacancies?

Alongside our headquarters in Leamington Spa, UK, we also have growing teams in Bangalore, India and Beijing, China. And if you don’t want to relocate, we even offer several remote-working positions so you could be part of our amazing team from the comfort of your own home!
                </Desc>
            </About>
            <Video>
                <ReactPlayer 
                width='560px'
                height='280px'
                controls
                url='https://www.youtube.com/watch?v=9No-FiEInLA'
                />
            </Video>
        </Wrapper>
    </Container>
  )
}

export default Aboutvideo
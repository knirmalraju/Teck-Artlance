import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Application = styled.div`
    width : 90%;
    ${mobile({width : "100%",display : "flex", alignItems : "center", justifyContent : "center", flexDirection : "column"})}
`;
const Title = styled.div`
    font-size : 40px;
    font-weight : 500;
    color : #f53c3c;
    padding : 10px 0px;
`;
const Location = styled.div`
    padding : 10px 0px;
    font-size : 18px;
`;
const Button = styled.div`
    height : 50px;
    width : 40vh;
    font-size : 15px;
    font-weight : 400;
    margin : 10px 0px;
    background-color : black;
    display : flex;
    align-items : center;
    justify-content : center;
    color : white;  
    cursor : pointer;
    transition : all 0.3s ease;
    &:hover{
        color : #ffffff;
        font-weight : 500;
        background-color : #f53c3c;
    }
`;
const Resp = styled.div`
    
`;
const Rtitle = styled.div`
    font-size : 19px;  
    padding : 10px;
`;
const Ulist = styled.ul`
    font-size : 17px; 
`;
const List = styled.li`
    line-height : 2;
`;
const Req = styled.div`
    font-size : 19px;  
    padding : 10px;
`;
const Japplication = () => {
  return (
    <Container>
        <Wrapper>
            <Application>
                <Title>Graphic Designer</Title>
                <Location>Team <span style={{fontWeight:"500"}}>Game Art</span> in <span style={{fontWeight:"500"}}>Puducherry</span></Location>
                <a href="#apply" style={{textDecoration : "none"}}><Button>APPLY NOW</Button></a>
                <Resp>
                    <Rtitle>Responsibilities :</Rtitle>
                    <Ulist>
                        <List>
                            Create various designs for the Monetization team and help us engage players in creative & inspiring ways.
                        </List>
                        <List>
                            Work cross-functionally & collaborate with stakeholders from various teams.
                        </List>
                        <List>
                            Brainstorming and leading creative monetization campaigns. 
                        </List>
                        <List>
                            Responsible for design elements and assets: pop-ups, banners, emails, social media posts, logos, mini-brands.
                        </List>
                        <List>
                            Learn about the gaming market & research new design ideas and stay on top of current cultural & social trends.
                        </List>
                    </Ulist>
                </Resp>
                <Req>
                    <Rtitle>Requirements :</Rtitle>
                    <Ulist>
                        <List>BA in Visual Communication or similar</List>
                        <List>Minimum 3-years experience as a Graphic or Marketing Designer</List>
                        <List>Experience in the gaming industry – Advantage</List>
                        <List>Experience in leading big campaigns from A to Z</List>
                        <List>Proven experience with Adobe CS with a major focus on Ps & Ai</List>
                        <List>Strong design, color, composition abilities</List>
                        <List>Good understanding of typography and hierarchies</List>
                        <List>Love and ability to design in a fast-paced environment, manage timelines, multi-task and collaborate with quick turnaround times</List>
                    </Ulist>
                </Req>
            </Application>
        </Wrapper>
    </Container>
  )
}

export default Japplication
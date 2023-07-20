import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height : 75vh;
    margin-bottom : 30px;
    ${mobile({marginBottom : "0px", height : "78vh"})}
`;
const Wrapper = styled.div`
    height : 100%;
    width : 90%;
    display : flex;
    justify-content : center;
    ${mobile({width : "100%", flexDirection : "column"})}
`;
const Contact = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
    ${mobile({justifyContent : "flex-start", padding : "5px 0px 10px 15px"})}
`;
const Ctitle = styled.div`
    height : 40px;
    font-size : 20px;
    font-weight : 500;
`;
const Address = styled.div`
    
`;
const Addr = styled.div`
    display : block;
    height : 30px;
    font-weight : 500;
`;
const Map = styled.div`
    flex : 1;
    height : 70vh;  
    display : flex;
    align-items : center;
    justify-content : center;
    ${mobile({margin : "10px 10px 15px 10px"})}
`;
const Location = () => {
  return (
    <Container>
        <Wrapper>
        <Contact>
            <Address>
                <Ctitle>
                    TECH ARTLANCE
                </Ctitle>
                <Addr>Address : </Addr>
                    Kwalee Ltd <br/>
                    Southam Road <br/>
                    Radford Semele <br/>
                    Leamington Spa <br/>
                    CV31 1FQ
                </Address>
            </Contact>
            <Map>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65222422.24281135!2d49.80386729106293!3d3.840058960024531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b63c5176f5%3A0xe2f36497c8e70816!2sKwalee%20India!5e0!3m2!1sen!2sin!4v1647760787980!5m2!1sen!2sin" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" title="myFrame"></iframe>
            </Map>
        </Wrapper>
    </Container>
  )
}

export default Location
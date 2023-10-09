import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import { CloseRounded, MenuRounded, Home, PhoneIphone, Computer, CardMembership, LibraryBooks, PermContactCalendar } from '@material-ui/icons';

const SideMenu = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
`;
const CloseBtn = styled.div`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    color : white;
`;
const Container = styled.div`
    height : 45px;
    display : flex;
    align-items : center;
    justify-content : center;
    position : relative;
    z-index : 4;
    ${mobile({ height: "50px" })};
`;
const Wrapper = styled.div`
    width : 100%;
    height : 45px;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : rgba(0,0,0,1); 
    position : fixed;
    ${mobile({ height: "50px" })};
`;
const Navigation = styled.div`
    color : white;
    font-size : 15px;
    display : flex;
    justify-content : center;
`;
const Menu = styled.div`
    height : 30px;
    width : 30px;
    top : 15px;
    left : 20px;
    position : absolute;
    background-color : black;
    color : white;
    visibility : hidden;
    @media only screen and (max-width : 950px){
        visibility : visible;
    }
    ${mobile({ visibility: "visible" })};
`;
const Logo = styled.div`
    display : none;
    font-size : 18px;
    font-weight : 500;
    top : 10px;
    left : 30vh;
    position : absolute;
    ${mobile({ position: "static", display: "block" })};
    @media only screen and (max-width : 950px){
        display : block;
        position : static;
    }
`;
const DLogo = styled.div`
    font-size : 18px;
    font-weight : 500;
    top : 10px;
    left : 0;
    margin-left : 10vh;
    position : absolute;
    ${mobile({ display: "none" })};
    @media only screen and (max-width : 950px){
        display : none;
    }
`;
const Ulist = styled.ul`
    display : flex;
    align-items : center;
    list-style : none;
    @media only screen and (max-width : 950px){
        display : none;
    }
    ${mobile({
    display: "none"
})}
`;
const Unlist = styled.ul`
    display : flex;
    flex-direction : column;
    //align-items : center;
    margin-left : -40px;
    list-style : none;
`;
const List = styled.li`
    padding : 0px 15px;
    opacity : 0.95;
    cursor : pointer;
    transition : all 0.4s ease;
    &:hover{
        //background-color : white;
        //color : black;
        //border-bottom : 1px solid white;
        //border : 1px dotted white;
        transform : scale(1.02);
        opacity : 1;
    }
`;
const SideList = styled.li`
    height : 68px;
    padding : 0px 15px;
    display : flex;
    opacity : 0.95;
    cursor : pointer;
    transition : all 0.4s ease;
    font-size : 22px;
`;
const Icons = styled.div`
    margin : 1px 15px 0px 0px;
`;
const Navbar = () => {
    const openmenu = () => {
        document.getElementById("Sidenav").style.width = "230px";
    }
    const closemenu = () => {
        document.getElementById("Sidenav").style.width = "0px";
    }
    return (
        <div>
            <SideMenu id="Sidenav">
                <CloseBtn onClick={closemenu}><CloseRounded /></CloseBtn>
                <Unlist>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/">
                        <SideList>
                            <Icons><Home /></Icons> Home
                        </SideList>
                    </Link>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/Mobilegames">
                        <SideList>
                            <Icons><PhoneIphone /></Icons> Mobile games
                        </SideList>
                    </Link>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/Pcgames">
                        <SideList>
                            <Icons><Computer /></Icons> Pc & Console
                        </SideList>
                    </Link>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/Careers">
                        <SideList>
                            <Icons><CardMembership /></Icons> Careers
                        </SideList>
                    </Link>
                    {/* <Link style={{ color: "white", textDecoration: "none" }} to="/Publishwithus">
                        <SideList>
                            <Icons><LibraryBooks /></Icons> Learn with us
                        </SideList>
                    </Link> */}
                    <Link style={{ color: "white", textDecoration: "none" }} to="/Gettrained">
                        <SideList>
                            <Icons><LibraryBooks /></Icons> Get trained
                        </SideList>
                    </Link>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/Contactus">
                        <SideList>
                            <Icons><PermContactCalendar /></Icons> Contact us
                        </SideList>
                    </Link>
                </Unlist>
            </SideMenu>
            <Container>
                <Wrapper>
                    <Navigation>
                        <Menu onClick={openmenu}>
                            <MenuRounded />
                        </Menu>
                        <Link style={{ color: "white", textDecoration: "none" }} to="/">
                            <Logo>Tech Artlance</Logo>
                        </Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="/">
                            <DLogo>Tech Artlance</DLogo>
                        </Link>
                        <Ulist>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/">
                                <List>
                                    Home
                                </List>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/Mobilegames">
                                <List>
                                    Mobile games
                                </List>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/Pcgames">
                                <List>
                                    Pc & Console
                                </List>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/Careers">
                                <List>
                                    Careers
                                </List>
                            </Link>
                            {/* <Link style={{ color: "white", textDecoration: "none" }} to="/Publishwithus">
                                <List>
                                    Publish with us
                                </List>
                            </Link> */}
                            <Link style={{ color: "white", textDecoration: "none" }} to="/Gettrained">
                                <List>
                                    Get trained
                                </List>
                            </Link>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/Contactus">
                                <List>
                                    Contact us
                                </List>
                            </Link>
                        </Ulist>
                    </Navigation>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar
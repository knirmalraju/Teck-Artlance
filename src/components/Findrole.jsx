import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { JobDetails } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    padding : 20px;
`;
const Wrapper = styled.div`
    width : 95%;
    ${mobile({width : "100%"})}
`;
const Title = styled.div`
    padding : 20px;
`;
const Span1 = styled.div`
    font-size : 18px;
    font-weight : 500;
    color : #f53c3c;
    text-decoration : underline;
    text-decoration-thickness : 3px;
    text-underline-offset : 15px;
`;
const Span2 = styled.div`
    font-size : 25px;
    font-weight : 400;
    padding : 35px 0px;
`;
const Jobs = styled.div`
    margin-left : 30px;
    ${mobile({marginLeft : "-15px", width : "100%"})}
`;
const Filters = styled.div`
    display : flex;
    height : 10vh;   
`;
const Roletitle = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    margin-left : 20px;
    ${mobile({maringLeft : "5px"})}
`;
const Location = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    margin-left : 20px;
`;
const Select = styled.select`
    height : 9vh;
    width : 30vh;
    font-size : 17px;
    padding : 10px;
    margin-right : 20px;
    ${mobile({height : "5vh", width : "15vh", padding : "5px", fontSize : "16px"})}
`;
const Option = styled.option`
    ${mobile({fontSize : "12px"})}
`;
const Team = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    margin-left : 20px;
`;
const Apply = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    margin-left : 20px;
`;
const Button = styled.div`
    height : 45px;
    width : 150px;
    font-size : 15px;
    font-weight : 400;
    border : 2px solid #f53c3ca6;
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
        background-color : #f53c3c;
    }
    ${mobile({margin : "8px 0px", fontSize : "17px", color : "white", backgroundColor : "black", border : "2px solid black", width : "40vh"})}
`;
const Job = styled.div`
    display : flex;
    font-size : 18px;
    height : 20vh;
    &:hover{
        background-color : #f8f8f8;
    }
    ${mobile({flexDirection : "column", margin : "10px 0px"})}
`;
const Span = styled.div`
    display : none;
    font-weight : 600;
    ${mobile({display : "block"})}
`;
const Findrole = () => {
    const [filters, setFilters] = useState({});
    const handleFilters= (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value,
        });
    };
    console.log(filters);
    console.log(filters.Teams);
    let width = window.innerWidth;
  return (
    <Container>
        <Wrapper>
            <Title>
                <Span1>CAREERS</Span1>
                <Span2>Find your roles</Span2>
            </Title>
            <Jobs>
                <Filters>
                    {width > "400px" ? <Roletitle style={{fontWeight : "400",fontSize : "20px"}}>Role</Roletitle> : <Roletitle style={{fontWeight : "400",fontSize : "20px"}}></Roletitle>}
                    <Location>
                        <Select name="location" onChange={handleFilters}>
                            <Option>All location</Option>
                            <Option>Puducherry</Option>
                        </Select>
                    </Location>
                    <Team>
                        <Select name="Teams" onChange={handleFilters}>
                            <Option >All Teams</Option>
                            <Option>Game Art</Option>
                            <Option>Engineering</Option>
                            <Option>Data science</Option>
                            <Option>Marketing</Option>
                            <Option>Product Management</Option>
                            <Option>studio Engineering</Option>
                        </Select>
                    </Team>
                    {width > "400px" ? <Apply style={{fontWeight : "400",fontSize : "20px"}}>Apply</Apply> : <Roletitle style={{fontWeight : "400",fontSize : "20px"}}></Roletitle>}
                </Filters>
                {JobDetails.map((item)=>(
                filters.location === item.location || filters.location === undefined || filters.location === "All location" ?
                filters.Teams === item.tname || filters.Teams === undefined || filters.Teams === "All Teams" ?
                <Job key={item.itd}>
                    <Roletitle><Span>Role :&nbsp;</Span>{item.role}</Roletitle>
                    <Location><Span>Location :&nbsp;</Span>{item.location}</Location>
                    <Team><Span>Team name :&nbsp;</Span>{item.tname}</Team>
                    <Apply>
                    <Link style={{color : "black", textDecoration : "none"}} to={`/Careers/${item.role}`}>   
                    <Button>Apply Now</Button>
                    </Link>
                    </Apply>
                </Job>
                : filters.Teams === item.tname || filters.Teams === undefined || filters.Teams === "All Teams" ?
                <Job key={item.itd}>
                    <Roletitle><Span>Role :&nbsp;</Span>{item.role}</Roletitle>
                    <Location><Span>Location :&nbsp;</Span>{item.location}</Location>
                    <Team><Span>Team name :&nbsp;</Span>{item.tname}</Team>
                    <Apply>
                    <Link style={{color : "black", textDecoration : "none"}} to={`/Careers/${item.role}`}>   
                    <Button>Apply Now</Button>
                    </Link>
                    </Apply>
                </Job>
                : 
                <div></div>
                :
                <div></div>
                ))}
            </Jobs>
        </Wrapper>
    </Container>
  )
}

export default Findrole
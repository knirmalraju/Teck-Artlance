import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom"
import styled from 'styled-components'
import { mobile } from '../responsive';
import emailjs from 'emailjs-com'

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Wrapper = styled.div`
    min-width : 50%;
    //background-color : #696969;
    ${mobile({width : "100%"})}
`;
const Title = styled.h2`
    font-size : 35px;
    font-weight : 500;
    padding : 10px 0px;
    display : flex;
    align-items : center;
    justify-content : center;
    ${mobile({width : "100%"})}
`;
const Form = styled.form`
    display : flex;
    flex-direction : column;
    font-family : sans-serif;
    align-items : center;
    justify-content : center;
    ${mobile({width : "100%"})}
`;
const Items = styled.div`
    display : flex;
    flex-direction : column;
    margin : 10px 0px;
`;
const Label = styled.label`
    font-size : 18px;
    font-weight : 500;
    padding : 10px 0px;
`;
const Input = styled.input`
    height : 40px;
    width : 90vh;
    margin-top : 10px;
    border-radius : 4px;
    border : 1px solid #9e9e9e;
    padding : 5px 10px;
    font-size : 16px;
    ${mobile({width : "40vh"})}
`;
const Submit = styled.button`
    height : 50px;
    width : 52vh;
    font-size : 15px;
    font-weight : 400;
    margin : 25px 0px;
    border : none;
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
    }
    ${mobile({width : "40vh"})}
`;
const Success = styled.div`
    padding : 5px;
    font-size : 18px;
    font-weight : 500;
    color : #f53c3c;
`;

const Enquiry = () => {
    const initialValues = { firstname : "", lastname : "", email : "", query : ""};
    const [formValues, setFormValues ] = useState(initialValues);
    const [formErrors, setFormErrors ] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const location = useLocation();
    const loc = location.pathname.split("/")[2];
    const query = loc.split("%20");
  
    const handleChange = (e) => {
      const {name, value } = e.target;
      setFormValues({ ...formValues, [name] : value });
    };
  
    const handleSubmit = (e) =>{
       e.preventDefault();
       setFormErrors(validate(formValues));
       setIsSubmit(true);
       if(isSubmit === true)
        {
        console.log("email should be sent");
         //Email.js
        emailjs.sendForm('service_hhqdf6h','template_vpfusm3', e.target, 'lx27M-YjVdF4r2la7').then(res=>{
          console.log(res);
        }).catch(err => console.log(err));
      }
    };
  
    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit)
      {
        console.log(formValues);
      }
    }, [formErrors, isSubmit, formValues])
  
    const validate = (values) => {
        const errors = {};
        const emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(!values.firstname){
          errors.firstname = "firstname is required!";
        }
        if(!values.lastname){
          errors.lastname = "lastname is required!";
        }
        if(!values.email){
          errors.email = "email is required!";
        } else if(!emailregex.test(values.email)){
          errors.email = "Not a valid email!";
        }
        if(!values.query){
          errors.query = "query is required!";
        }
        return errors;
    };
  return (
    <Container>
      <Wrapper>
          <Title>{query[0]} {query[1]}</Title>
          <Form onSubmit={handleSubmit}>
            <Items>
              <Label>First Name</Label>
              <Input 
              type="text" 
              name="firstname" 
              placeholder='firstname' 
              value={formValues.firstname}
              onChange={handleChange}
              />
            </Items>
            <p>{formErrors.firstname}</p>
            <Items>
              <Label>Last Name</Label>
              <Input 
              type="text" 
              name="lastname" 
              placeholder='lastname' 
              value={formValues.lastname}
              onChange={handleChange}
              />
            </Items>
            <p>{formErrors.lastname}</p>
            <Items>
              <Label>Email</Label>
              <Input 
              type="email" 
              name="email" 
              placeholder='Email' 
              value={formValues.email}
              onChange={handleChange}
              />
            </Items>
            <p>{formErrors.email}</p>
            <Items>
              <Label>query</Label>
              <Input 
              type="text" 
              name="query" 
              placeholder='Your query' 
              value={formValues.query}
              onChange={handleChange}
              />
            </Items>
            <p>{formErrors.query}</p>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<Success>submitted successfully!</Success>) : (<Success></Success>)}
            <Submit>
              Submit
            </Submit>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Enquiry
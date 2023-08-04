import React, { useState } from 'react'
import { styled } from 'styled-components'
import { mobile , tablet} from '../responsive';
import { signInValidationSchema } from '../validators/signinschema';
import { Alert,Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';


const Container  = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${tablet(
        {
          width:'90%',
        }
    )};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* ${tablet(
      {
        flexDirection: 'column',
      }
    )}; */
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const HaveAccount = styled.a`
   font-size: 14px;
    font-weight: 100;
    margin: -10px 0 10px 0;
`;
export default function Register() {
  // const [formErrors, setFormErrors] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    console.log('event',event);
    console.log('reason',reason);
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
    setFormSubmit(false);
  };


  const submitForm = async (event) => {
    event.preventDefault();
    let formData = {
      username: event.target[0].value,
      email: event.target[1].value,
      password:event.target[2].value,
    }

   const isValid = await signInValidationSchema.isValid(formData,);

   if(isValid){
        console.log('form valid',formData);
        setFormSubmit(true);
   }else{
        console.log('form not valid')
        setShowSnackbar(true)
    }


    // try {
    //   console.log('formData',formData);
    //   await validationSchema.isValid(formData,{ abortEarly:false });
    //   // console.log('isValid',isValid)
    //   console.log('Form is valid. Submitting...');
    // } catch (error) {
    //   const errors = {};
    //   error.inner.forEach((err) => {
    //     errors[err.path] = err.message;
    //   });
    //   setFormErrors(errors);
    //   console.log('formErrors',formErrors)
    // }
  };

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={ submitForm }>
                <Input type='text' placeholder='name' />
                {/* {formErrors.username && <span>{formErrors.username}</span>} */}
                <Input type='email' placeholder='email' />
                {/* {formErrors.email && <span>{formErrors.email}</span>}  */}
                <Input type='password' placeholder='password' minLength={4} maxLength={16}/>
                {/* {formErrors.password && <span>{formErrors.password}</span>} */}
                <Agreement>
                    By createin an account, I consent to the processing of my personal data in
                    accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <HaveAccount>Already have account please <Link to={'/signin'}>Signin</Link></HaveAccount>
                <Button>CREATE</Button>
            </Form>
            {/* Snackbar to show success message */}
            <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="error">
                 <p> Username is required </p>
                 <p> Email is required </p>
                 <p> Password must 4 characters max 16 characters is required </p>
              </Alert>
            </Snackbar>
            <Snackbar open={formSubmit} autoHideDuration={1000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="success">
                successfully register
              </Alert>
            </Snackbar>
        </Wrapper>
    </Container>
  )
}

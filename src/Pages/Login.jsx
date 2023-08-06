import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { signupValidationSchema } from '../validators/signinschema';
import { Alert,Snackbar } from '@mui/material';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp,selectIsLoggedIn } from "../redux/authReducer";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Navigate = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const handleCloseSnackbar = (event, reason) => {
    console.log('event',event);
    console.log('reason',reason);
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
    setFormSubmit(false);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const submitForm = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password:event.target[1].value,
    }
    const isValid = await signupValidationSchema.isValid(formData);
    if(isValid){
        //  console.log('form valid',formData);
        //  console.log('form useSelector',users);
         dispatch(signUp(formData));
         setFormSubmit(isLoggedIn);
        //  const loginState = { isLoggedIn:  isLoggedIn}
         navigate('/');
    }else{
         console.log('form not valid')
         setShowSnackbar(true)
     }
  }



  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={ submitForm }>
          <Input type="email" placeholder="email" />
          <Input type='password' placeholder="password" minLength={4} maxLength={16}/>
          <Button>LOGIN</Button>
          <Navigate>DO NOT YOU REMEMBER THE PASSWORD?</Navigate>
          <Navigate><Link to={'/signup'}>CREATE A NEW ACCOUNT</Link></Navigate>
        </Form>
        {/* Snackbar to show success message */}
            <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="error">
                 <p> Email is required </p>
                 <p> Password must 4 characters max 16 characters is required </p>
              </Alert>
            </Snackbar>
            <Snackbar open={formSubmit} autoHideDuration={1000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="success">
                successfully login
              </Alert>
            </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Login;
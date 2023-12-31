import React from 'react'
import { styled } from 'styled-components';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
flex: 1;
margin: 3px; 
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
/* ${mobile(
      {
        height:'30vh',
      }
    )}; */
`;
const Info = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const Title = styled.h1`
color: #fff;
margin-bottom: 20px;
`;
const Button = styled.button`
border: none;
padding: 10px;
background: #fff;
color: gray;
font-weight: 700;
cursor: pointer;
`;
export default function CategoriesItem(props) {

  const navigate = useNavigate();

  const shopNow = () => { navigate('/products')  }

  return (
    <Container>
        <Image src={props.items.img}/>
        <Info>
            <Title>{ props.items.title }</Title>
            <Button onClick={ shopNow }>SHOP Now</Button>
        </Info>
    </Container>
  )
}

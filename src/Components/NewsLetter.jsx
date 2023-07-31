import { Send } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
  flex: 9;
  border: none;
  padding-left:10px;
  outline: none;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #008080;
    color: #fff;
    cursor: pointer;
`;


export default function NewsLetter() {
  return (
    <Container>
        <Title>News Letter </Title>
        <Description>Get timply updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

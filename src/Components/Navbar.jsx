import { Badge } from '@material-ui/core';
import { Search,LocalMallOutlined } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
      height:60px;
`;
const Wrapper = styled.div`
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:10px 20px;
`;

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`;

const Logo = styled.h1`
    font-weight:bold;
`;

const Input = styled.input`
    border:none;
`;

const SearchContainer = styled.div`
    border:.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`;

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Left = styled.div`
      flex:1;
      display: flex;
      align-items: center;
`;
const Center = styled.div`
      flex:2;
      text-align:center;
`;
const Right  = styled.div`
      flex:1;
      display: flex;
      justify-content: flex-end;
`;


export default function Navbar() {
  return (
    <Container>
      <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
               <Input />
               <Search style={{ color:'grey',fontSize:16 }}/>
            </SearchContainer>
          </Left>
          <Center><Logo>My <span>store</span></Logo></Center>
          <Right>
            <MenuItems>SIGN IN</MenuItems>
            <MenuItems>SIGN UP</MenuItems>
            <MenuItems>
              <Badge badgeContent={4} color='primary'>
                <LocalMallOutlined/>
              </Badge>
            </MenuItems>
          </Right>
      </Wrapper>
    </Container>
  )
}

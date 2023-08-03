import { Badge } from '@material-ui/core';
import { Search,LocalMallOutlined } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
      height:60px;
      ${mobile(
        {
          height:'50px',
        }
      )};

`;
const Wrapper = styled.div`
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:10px 20px;
      ${mobile(
        {
          padding:'10px 0px',
        }
      )};
`;

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile(
        {
          display:'none',
        }
      )};
`;

const Logo = styled.h1`
    font-weight:bold;
    ${mobile(
        {
          fontSize:'24px',
        }
      )};
`;

const Input = styled.input`
    border:none;
    ${mobile(
        {
          width:'50px',
        }
      )};
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
    ${mobile(
        {
          fontSize:'12px',
          marginLeft:'10px',
        }
      )};
`;

const Left = styled.div`
      flex:1;
      display: flex;
      align-items: center;
`;
const Center = styled.div`
      flex:2;
      ${mobile(
        {
          paddingLeft:'10px',
        }
      )};
`;
const Right  = styled.div`
      flex:1;
      display: flex;
      justify-content: flex-end;
      line-height: 2;
      ${mobile(
        {
          flex:2,
          justifyContent:'center',
        }
      )};
`;


export default function Navbar() {
  return (
    <Container>
      <Wrapper>
          {/* <Left>
            <Language>EN</Language>
            <SearchContainer>
               <Input placeholder='Search'/>
               <Search style={{ color:'grey',fontSize:16 }}/>
            </SearchContainer>
          </Left> */}
          <Center><Logo>
            <Link to={'/'} className='removeUnderLine'>My <span>store</span></Link></Logo></Center>
          <Right>
            <MenuItems><Link to={'/signin'} className='removeUnderLine'>SIGN IN</Link></MenuItems>
            <MenuItems><Link to={'/signup'} className='removeUnderLine'>SIGN UP</Link></MenuItems>
            <MenuItems to={'/cart'}>
              <Badge badgeContent={4} color='primary'>
                <LocalMallOutlined/>
              </Badge>
            </MenuItems>
          </Right>
      </Wrapper>
    </Container>
  )
}

import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
  display: flex;
  ${mobile(
        {
          flexDirection:'column',
        }
    )};
`;

const Logo = styled.h1`

`;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    margin-right: 20px;
    transition: all .4s ease;
        &:hover{
            transform: scale(1.1);
        }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile(
        {
          display:'none',
        }
    )};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all .4s ease;
    &:hover{
        color: #008080;

    }
`;



const Right = styled.div`
  flex: 1;
   padding: 20px;
   ${mobile(
        {
            backgroundColor:'lightgray',
        }
    )};
`;

const ConactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;



export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>My Store</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consequatur nobis. Voluptatibus obcaecati illo facere, ex consectetur esse molestias quo! Quas, qui odit quia cumque ab sit voluptatem fugit earum?
            </Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <WhatsApp />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ConactItem> <Room style={{ marginRight:'10px' }}/> 123 Rich Street, Chennai - 600001</ConactItem>
            <ConactItem> <Phone style={{ marginRight:'10px' }}/> +91 1234567890</ConactItem>
            <ConactItem> <MailOutline style={{ marginRight:'10px' }}/> chennai@gmail.com</ConactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

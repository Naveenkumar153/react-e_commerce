import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components'

const Info  = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container  = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    cursor: pointer;
    &:hover ${Info}{
            transition: all .5s ease-in;
            opacity: 1;
        }
`;

const Circle  = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`;
const Image  = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s ease;
    margin: 10px;
        &:hover{
            background-color: #e9f5f5;
            transform: scale(1.1);
        }
`;
export default function Product(props) {
  return (
    <Container>
        <Circle />
        <Image src={props.products.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

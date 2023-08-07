import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

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
    width: 290px;
    height: 290px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`;
const Image  = styled.img`
    height: 40%;
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const viewProductDetail = (id) => {
        navigate('/product/'+id);
    };

  return (
    <Container onClick={ () => viewProductDetail(props.products.id) }>
        <Circle />
        <Image src={props.products.image}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined onClick={ (e) => {e.stopPropagation(); dispatch(addToCart(props.products))} }/>
            </Icon>
            {/* <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon> */}
        </Info>
    </Container>
  )
}

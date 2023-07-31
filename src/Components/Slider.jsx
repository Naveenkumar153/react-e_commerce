import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { styled } from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #f3f3f3;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #fff7f7;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    line-height: 4;
    position: absolute;
    top: 0;
    bottom: 0;
    top: 50%;
    left:${props => props.direction == 'left' && '10px'};
    right:${props => props.direction == 'right' && '10px'};
    opacity: .5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all .6s ease;
    transform: translateX(${(props) => props.slideIdx * -100}vw);
`;

const Slide  = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg };
`;
const ImgContainer  = styled.div`
    height: 100%;
    flex:1;
`;

const Image = styled.img`
    height: 80%;
`;
const InfoContainer  = styled.div`
    flex:1;
    padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;
text-transform: uppercase;
`;
const Para  = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px ;
    text-transform: uppercase;
    `;
const Btn   = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    text-transform: uppercase;
`;

export default function Slider() {

  const [slideIdx, setSlideIdx] = useState(0);

  const handleClick = (direction) => {
    console.log('handle click', direction);
    if(direction == 'left'){
        setSlideIdx(slideIdx > 0 ? slideIdx - 1 : 2);
    }else{
        setSlideIdx(slideIdx < 2 ? slideIdx + 1 : 0);
    }
  };

  return (
    <Container>
        <Arrow direction='left' onClick={ () => handleClick('left') }>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIdx={slideIdx}>
            {
                sliderItems.map(item => {
                    return (
                        <Slide bg={item.bg}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Para>{item.desc}</Para>
                                <Btn>show now</Btn>
                            </InfoContainer>
                        </Slide>
                    );
                })
            }
        </Wrapper>
        <Arrow direction='right' onClick={ () => handleClick('right') }>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

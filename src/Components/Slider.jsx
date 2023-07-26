import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";
import { styled } from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
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
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide  = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
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

`;
const Para  = styled.p`

`;
const Btn   = styled.button`

`;

export default function Slider() {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src='https://i.ibb.co/DG69bQ4/2.png' />
                </ImgContainer>
                <InfoContainer></InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction='right'>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

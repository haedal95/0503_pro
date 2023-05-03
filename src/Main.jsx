import styled from "styled-components";

const ContainerImg = styled.div`
  witdh: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const MainImg = styled.img`
  witth: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const MainTitle = styled.div`
  position: absolute;
  font-weight: 900;
  font-size: 90px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 99%;
`;

const SubTitle = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  font-size: 40px;
  margin-top: 20px;
`;

export default function Main() {
  return (
    <ContainerImg>
      <MainImg witdh="100%" src="https://cdn.pixabay.com/photo/2018/07/09/16/59/clouds-3526558_960_720.jpg" alt="메인이미지" />
      <MainTitle>Love ya</MainTitle>
      <SubTitle>love is everything</SubTitle>
    </ContainerImg>
  );
}

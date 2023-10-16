import { useState } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  aspect-ratio: 18/39;
  height: 100vh;

  @media screen and (max-width: 479px) {
    aspect-ratio: 18/39;
  }
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.div`
  width: 90%;
  height: 30%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
`;

const StartButtonText = styled.p`
  color: #000;
  font-size: 100px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const InnerContainer = () => {
  const [started, setStarted] = useState(false);

  return (
    <GameContainer>
      <StartButton onClick={() => setStarted(!started)}>
        <StartButtonText>{started ? "Started" : "Start"}</StartButtonText>
      </StartButton>
    </GameContainer>
  );
};

export default InnerContainer;

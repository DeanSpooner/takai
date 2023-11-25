import { useState } from "react";
import styled from "styled-components";
import TileMap from "./TileMap";

const GameContainer = styled.div`
  height: 90vh;
  width: 90vw;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.div<{ faded: boolean }>`
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      display: none;
    }
  }
  width: 90%;
  height: 30%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  animation: ${(props) => (props.faded ? "1s forwards fadeout" : "")};
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
  const [faded, setFaded] = useState(false);

  return (
    <GameContainer>
      <StartButton
        onClick={() => {
          setStarted(!started);
          setTimeout(() => setFaded(true), 500);
        }}
        faded={faded}
      >
        <StartButtonText>{started ? "Started" : "Start"}</StartButtonText>
      </StartButton>
      {faded && <TileMap faded={faded} />}
    </GameContainer>
  );
};

export default InnerContainer;

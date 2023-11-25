import styled from "styled-components";
import Tileset from "../assets/tileset.png";
import { island } from "../maps/island";
import { tileToTileSetCoords } from "../scripts/tileset";

const TileMapContainer = styled.div<{ faded: boolean }>`
  @keyframes fadein {
    0% {
      opacity: 0;
      display: none;
    }
    50% {
      opacity: 0;
      display: none;
    }
    100% {
      opacity: 1;
      display: flex;
    }
  }
  width: 100%;
  height: 100%;
  background-color: #4c8acc;
  animation: ${(props) => (props.faded ? "2s forwards fadein" : "")};
  display: flex;
  flex-direction: column;
`;

const TileRow = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
`;

const TileContainer = styled.div`
  width: 64px;
  height: 64px;
`;

const Tile = styled.div<{ left: number; top: number }>`
  width: 16px;
  height: 16px;
  background-image: url(${Tileset});
  background-position: ${(props) => `${props.left}px ${props.top}px`};
  background-repeat: no-repeat;
  background-clip: border-box;
  image-rendering: pixelated;
  transform-origin: top left;
  transform: scale(4);
`;

type Props = {
  faded: boolean;
};

const mapToTiles = (tileMap: string[][]) => {
  return tileMap.map((tileRow) => (
    <TileRow>
      {tileRow.map((tile) => {
        const tileData = tileToTileSetCoords(tile);
        return (
          <TileContainer>
            <Tile left={tileData.left} top={tileData.top} />
          </TileContainer>
        );
      })}
    </TileRow>
  ));
};

const TileMap = ({ faded }: Props) => {
  return (
    <TileMapContainer faded={faded}>{mapToTiles(island)}</TileMapContainer>
  );
};

export default TileMap;

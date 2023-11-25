export type tileData = {
  left: number;
  top: number;
};

export const tileToTileSetCoords = (tile: string): tileData => {
  switch (tile) {
    default:
    case "grass-tl":
      return {
        left: 0,
        top: 0,
      };
    case "grass-t":
      return {
        left: -16,
        top: 0,
      };
    case "grass-tr":
      return {
        left: -32,
        top: 0,
      };
    case "grass-cl":
      return {
        left: 0,
        top: -16,
      };
    case "grass-c":
      return {
        left: -16,
        top: -16,
      };
    case "grass-cr":
      return {
        left: -32,
        top: -16,
      };
    case "grass-bl":
      return {
        left: 0,
        top: -32,
      };
    case "grass-b":
      return {
        left: -16,
        top: -32,
      };
    case "grass-br":
      return {
        left: -32,
        top: -32,
      };
    case "grass-tlw":
      return {
        left: -64,
        top: -16,
      };
    case "grass-trw":
      return {
        left: -48,
        top: -16,
      };
    case "grass-blw":
      return {
        left: -64,
        top: -0,
      };
    case "grass-brw":
      return {
        left: -48,
        top: -0,
      };
    case "grass-c-leaf1":
      return {
        left: -48,
        top: -32,
      };
    case "grass-c-leaf2":
      return {
        left: -64,
        top: -32,
      };
  }
};

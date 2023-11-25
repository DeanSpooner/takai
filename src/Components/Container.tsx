import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  --rainbow1: #ffd20e;
  --rainbow2: #e5bc08;
  --rainbow3: #ec8401;
  --rainbow4: #e65c04;
  --rainbow5: #e52e06;
  --rainbow6: #de006b;
  --rainbow7: #ca039e;
  --rainbow8: #a203cb;
  --rainbow9: #6d01c9;

  --number-of-colors: 9;
  --stop-size: calc(100vh / var(--number-of-colors));

  background: linear-gradient(
    to bottom,
    var(--rainbow1) calc(var(--stop-size)),
    var(--rainbow2) calc(var(--stop-size)) calc((var(--stop-size)) * 2),
    var(--rainbow3) calc((var(--stop-size)) * 2) calc((var(--stop-size)) * 3),
    var(--rainbow4) calc((var(--stop-size)) * 3) calc((var(--stop-size)) * 4),
    var(--rainbow5) calc((var(--stop-size)) * 4) calc((var(--stop-size)) * 5),
    var(--rainbow6) calc((var(--stop-size)) * 5) calc((var(--stop-size)) * 6),
    var(--rainbow7) calc((var(--stop-size)) * 6) calc((var(--stop-size)) * 7),
    var(--rainbow8) calc((var(--stop-size)) * 7) calc((var(--stop-size)) * 8),
    var(--rainbow9) calc((var(--stop-size)) * 8) calc((var(--stop-size)) * 9)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

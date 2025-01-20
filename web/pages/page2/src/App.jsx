import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export function App() {
  return (
    <StyledApp>
      <h1>This is page 2</h1>
    </StyledApp>
  );
}

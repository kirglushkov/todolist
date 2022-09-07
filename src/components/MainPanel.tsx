import styled from "@emotion/styled";

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

function MainPanel({ key, children }: any) {
  return <Main key={key}>{children}</Main>;
}

export default MainPanel;

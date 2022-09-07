import styled from "@emotion/styled";

const HeaderPanel = styled.h1`
  color: white;
`;

function Header({ children }: any) {
  return <HeaderPanel>{children}</HeaderPanel>;
}

export default Header;

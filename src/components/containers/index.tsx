import styled from 'styled-components';

const LayoutContainer = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LayoutContainer;
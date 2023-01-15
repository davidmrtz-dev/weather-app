import styled from 'styled-components';

const LayoutContainer = styled.div`
  background-color: ${props => props.theme.colors.rfwGray};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 5em 0;
`;

export default LayoutContainer;
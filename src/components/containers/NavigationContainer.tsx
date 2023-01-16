import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 360px;
  height: 5em;
  background-color: ${props => props.theme.colors.backgroundBlue};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`;
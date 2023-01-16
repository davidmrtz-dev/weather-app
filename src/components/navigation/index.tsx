import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  width: 360px;
  height: 5em;
  background-color: ${props => props.theme.colors.backgroundBlue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 401;
`;

const Navigation = (): JSX.Element => {
 return(
  <NavigationContainer>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </NavigationContainer>
 );
};

export default Navigation;
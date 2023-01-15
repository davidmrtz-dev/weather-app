import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5em;
  background-color: ${props => props.theme.colors.brandGray};
  display: flex;
  justify-content: space-around;
  align-items: center;
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
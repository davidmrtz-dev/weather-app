import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '../containers/NavigationContainer';
import { useState } from 'react';

const Navigation = (): JSX.Element => {
  const [show, setShow] = useState(false);

 return(
  <NavigationContainer>
    {!show && (<FontAwesomeIcon
      size='lg'
      style={{ cursor: 'pointer' }}
      icon={faBars} onClick={() => setShow(true)}/>)
    }
    {show && (<FontAwesomeIcon
      size='lg'
      style={{ cursor: 'pointer' }}
      icon={faTimes} onClick={() => setShow(false)}/>)
    }
  </NavigationContainer>
 );
};

export default Navigation;
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '../containers/NavigationContainer';
import { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { theme } from '../../Theme';

const Navigation = (): JSX.Element => {
  const [show, setShow] = useState(false);

 return(
  <NavigationContainer>
    {!show && (<FontAwesomeIcon
      color={theme.colors.lightWhite}
      size='lg'
      style={{ cursor: 'pointer' }}
      icon={faBars} onClick={() => setShow(true)}/>)
    }
    {show && (<FontAwesomeIcon
      color={theme.colors.lightWhite}
      size='lg'
      style={{ cursor: 'pointer' }}
      icon={faTimes} onClick={() => setShow(false)}/>)
    }
    <Drawer
      placement={'top'}
      onClose={() => setShow(false)}
      open={show}
      key={'top'}
      closable={false}
      style={{
        width: 360,
        height: 120,
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: 'auto',
      marginRight: 'auto'
      }}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'none !important',
        background: theme.colors.blues.dailyBlue
      }}
      contentWrapperStyle={{
        boxShadow: 'none'
      }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Link style={{ width: '100% '}} to='/'>
          <Button block onClick={() => setShow(false)}>
            Home
          </Button>
        </Link>
        <Link to='/about'>
          <Button block onClick={() => setShow(false)}>
            About
          </Button>
        </Link>
      </Space>
    </Drawer>
  </NavigationContainer>
 );
};

export default Navigation;
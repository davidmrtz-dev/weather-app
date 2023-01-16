import { Image, Typography } from "antd";
import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { LoadingMask } from "../../../atoms/LoadingMask";
import logo from '../../../assets/svg/02n.svg';
import { theme } from "../../../Theme";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = ({
  position
}: {
  position: LatLngLiteral | null;
}): JSX.Element =>  <HeaderContainer>
  {!position ? (<Typography style={{
    ...theme.texts.brandH3,
    color: theme.colors.lightWhite,
    textAlign: 'center'
  }}>
    Click on the map
  </Typography>) :
  (<HeaderContent />)
}
</HeaderContainer>;

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderContentWrapper = styled.div`
  flex: 1;
  margin: 5px;
  background: gray;
`;

const HeaderContent = (): JSX.Element => <HeaderContentContainer>
  <HeaderContentWrapper
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}
  >
    <Typography style={{...theme.texts.brandH1}}>21</Typography>
    <Image width={100} src={logo} />
  </HeaderContentWrapper>
  <HeaderContentWrapper><h1>okokokok</h1></HeaderContentWrapper>
</HeaderContentContainer>;
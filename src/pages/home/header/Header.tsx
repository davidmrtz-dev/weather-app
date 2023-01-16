import { Image, Typography } from "antd";
import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { LoadingMask } from "../../../atoms/LoadingMask";
import { ReactComponent as Logo} from '../../../assets/svg/02n.svg';
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
    color: theme.colors.lighterWhite,
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
`;

const HeaderContent = (): JSX.Element => <HeaderContentContainer>
  <HeaderContentWrapper
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}
  >
    <div style={{
      position: 'relative'
    }}>
      <Typography style={{...theme.texts.brandH1, color: theme.colors.lighterWhite}}>21</Typography>
      <Typography style={{
        ...theme.texts.brandSubFont,
        color: theme.colors.lighterWhite,
        fontWeight: 'bold',
        position: 'absolute',
        top: 0,
        left: 60,
        width: 100
      }}>c°</Typography>
    </div>
    <Logo fill={theme.colors.lighterWhite} width={100}/>
  </HeaderContentWrapper>
  <HeaderContentWrapper>

  </HeaderContentWrapper>
</HeaderContentContainer>;



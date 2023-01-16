import { Typography } from "antd";
import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { LoadingMask } from "../../../atoms/LoadingMask";
import { theme } from "../../../Theme";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherDataContainer = styled.div`
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
  <WeatherDataContainer>
    <LoadingMask width={45} height={45} />
  </WeatherDataContainer>
}
</HeaderContainer>;
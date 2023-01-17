import { Typography } from "antd";
import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { Content } from "../../../@types";
import { theme } from "../../../Theme";
import { MiddleContent } from "./MiddleContent";
import { TopContent } from "./TopContent";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({
  position,
  content
}: {
  position: LatLngLiteral | null;
  content: Content | null
}): JSX.Element =>  <HeaderContainer>
  {!position ? (<Typography style={{
    ...theme.texts.brandH3,
    color: theme.colors.lighterWhite,
    textAlign: 'center'
  }}>
    Click on the map
  </Typography>) :
  (<div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }}>
    <TopContent />
    <MiddleContent content={content} />
  </div>)
}
</HeaderContainer>;

export default Header;





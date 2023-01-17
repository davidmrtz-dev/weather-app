import { Typography } from "antd";
import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { Content } from "../../../@types";
import { theme } from "../../../Theme";
import { BottomContent } from "./BottomContent";
import { MiddleContent } from "./MiddleContent";
import { TopContent } from "./TopContent";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = ({
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
    {/* <BottomContent /> */}
  </div>)
}
</HeaderContainer>;





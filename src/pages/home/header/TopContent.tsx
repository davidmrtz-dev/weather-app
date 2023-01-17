import { Typography } from "antd";
import styled from "styled-components";
import { theme } from "../../../Theme";
import { Content } from '../../../@types';
import { toCelsius } from '../../../utils';
import { LogoDict } from "../../../utils/Logos";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

export const TopContent = ({
  content
}: {
  content: Content | null
}): JSX.Element => content ? (<ContentContainer>
  <ContentWrapper style={{ paddingTop: '10px' }}>
    <Typography
      style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}
    >Now in Queretaro</Typography>
  </ContentWrapper>
  <ContentWrapper
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}
  >
    <div style={{
      position: 'relative'
    }}>
      <Typography style={{
        ...theme.texts.brandH1,
        color: theme.colors.lighterWhite,
        fontSize: '5em'
      }}>
        {toCelsius(content.secondSection?.temp, 1)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite,
        fontWeight: 'bold',
        position: 'absolute',
        top: 20,
        left: 155,
        width: 100
      }}>c°</Typography>
    </div>
    {LogoDict[content.firstSection?.icon as keyof typeof LogoDict || 'unknown']}
  </ContentWrapper>
</ContentContainer>) : (<></>);
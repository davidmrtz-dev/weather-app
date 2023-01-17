import { Typography } from "antd";
import styled from "styled-components";
import { Clouds, Content, Main, Rain, Weather, Wind } from "../../../@types";
import { ReactComponent as FirstLogo } from '../../../assets/svg/04n.svg';
import { ReactComponent as SecondLogo } from '../../../assets/svg/03n.svg';
import { theme } from "../../../Theme";
import { toCelsius } from "../../../utils";

const ContentContainer = styled.div`
  display: flex;
  height: 150px;
  overflow-x: auto;
`;

const ContentItemWrapper = styled.div`
  display: flex;
  min-width: calc(360px - (16px*2));
  height: 100%;
  background-color: gray;
  margin: 2px;
`;

export const MiddleContent = ({
  content
}: {
  content: Content | null
}): JSX.Element => {
  return(<ContentContainer>
    {content?.firstSection &&  <FirstSection item={content.firstSection}/>}
    {content?.secondSection &&  <SecondSection item={content.secondSection}/>}
    {/* {content?.thirdSection &&  <ThirdSection item={content.thirdSection}/>} */}
  </ContentContainer>);
};

// const ThirdSection = ({ item }: { item: (Wind | Rain | Clouds) | undefined, }): JSX.Element => <ContentItemWrapper>
//   {item && (<div style={{
//     width: '100%',
//     height: '100%',
//     display: 'flex'
//   }}>
//     <div style={{
//       flex: 1,
//       flexDirection: 'column',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '20px 0'
//     }}>
//       <Typography style={{
//         ...theme.texts.brandFont,
//         color: theme.colors.lighterWhite
//       }}>
//         Wind speed: {toCelsius(item?.speed)}
//       </Typography>
//       <Typography style={{
//         ...theme.texts.brandFont,
//         color: theme.colors.lighterWhite
//       }}>
//         Feels like: {toCelsius(item.feels_like)}
//       </Typography>
//       <Typography style={{
//         ...theme.texts.brandFont,
//         color: theme.colors.lighterWhite
//       }}>
//         Min: {toCelsius(item.temp_min)}
//       </Typography>
//       <Typography style={{
//         ...theme.texts.brandFont,
//         color: theme.colors.lighterWhite
//       }}>
//         Max: {toCelsius(item.temp_max)}
//       </Typography>
//     </div>
//     <div style={{
//       flex: 1,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <SecondLogo fill={theme.colors.lighterWhite} width={100}/>
//     </div>
//   </div>)}
// </ContentItemWrapper>;

const SecondSection = ({ item }: { item: Main | undefined, }): JSX.Element => <ContentItemWrapper>
  {item && (<div style={{
    width: '100%',
    height: '100%',
    display: 'flex'
  }}>
    <div style={{
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0'
    }}>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Temperature: {toCelsius(item.temp)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Feels like: {toCelsius(item.feels_like)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Min: {toCelsius(item.temp_min)}
      </Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>
        Max: {toCelsius(item.temp_max)}
      </Typography>
    </div>
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <SecondLogo fill={theme.colors.lighterWhite} width={100}/>
    </div>
  </div>)}
</ContentItemWrapper>;

const FirstSection = ({ item }: { item: Weather | undefined, }): JSX.Element => <ContentItemWrapper>
  {item && (<div style={{
    width: '100%',
    height: '100%',
    display: 'flex'
  }}>
    <div style={{
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '40px 0'
    }}>
      <Typography style={{
        ...theme.texts.brandH3,
        color: theme.colors.lighterWhite
      }}>{item.main}</Typography>
      <Typography style={{
        ...theme.texts.brandFont,
        color: theme.colors.lighterWhite
      }}>{item.description}</Typography>
    </div>
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FirstLogo fill={theme.colors.lighterWhite} width={100}/>
    </div>
  </div>)}
</ContentItemWrapper>;
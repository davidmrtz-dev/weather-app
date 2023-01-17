import { Typography } from "antd";
import { LatLngLiteral } from "leaflet";
import styled from "styled-components";
import { City } from "../../../@types";
import { theme } from "../../../Theme";

const ContentContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 20px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(86, 130, 215, 0.4);
  height: 150px;
`;

  const ContentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(360px - (20px*2));
  height: 90%;
  background-color: rgba(86, 130, 215, 0.4);
  margin: 2px;
  opacity: 1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Bottom = ({
  nearCities,
  setPosition
}: {
  nearCities: City [];
  setPosition: (newPos: LatLngLiteral) => void;
}): JSX.Element => <ContentContainer>
  {nearCities.length > 0 && nearCities.map((city: City) => <ContentItemWrapper
    onClick={() => setPosition({ lat: city.latitude, lng: city.longitude })}
  >
    {Object.keys(city).map((key) => <Typography
      style={{
        ...theme.texts.brandSubFont,
        color: theme.colors.lighterWhite
      }}
    >
      <strong>{key}:</strong> {city[key as keyof typeof city].toString()}
    </Typography>)}
  </ContentItemWrapper>)}
</ContentContainer>;

export default Bottom;
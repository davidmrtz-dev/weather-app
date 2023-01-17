import styled from "styled-components";

const data = [
  {
    name: 'rain'
  },
  {
    name: 'wind'
  },
  {
    name: 'humidity'
  },
  {
    name: 'another one'
  },
  {
    name: 'one more'
  },
  {
    name: 'last one'
  },
  {
    name: 'okok'
  }
];

const ContentContainer = styled.div`
  height: 150px;
  overflow: auto;
  white-space: nowrap;
`;

const ContentItemWrapper = styled.div`
  width: 170px;
  height: 100%;
  background-color: red;
  margin: 2px;
  display: inline-block;
`;

export const BottomContent = (): JSX.Element => <ContentContainer>
  {data.map(d => <ContentItemWrapper />)}
</ContentContainer>;
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
  display: flex;
  height: 130px;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 20px 0;
  background-color: rgba(86, 130, 215, 0.4);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ContentItemWrapper = styled.div`
  background-color: ${props => props.theme.colors.grays.lighter};
  display: flex;
  min-width: calc(360px - (20px*2));
  height: 90%;
  margin: 2px;
  opacity: 1;
  border-radius: 10px;
`;

const Bottom = (): JSX.Element => <ContentContainer>
  {data.map(d => <ContentItemWrapper />)}
</ContentContainer>;

export default Bottom;
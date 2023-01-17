import styled from "styled-components";
import { Content } from "../../../@types";

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
}): JSX.Element => <ContentContainer>
  {content && Object.keys(content).map(key => <ContentItem item={content[key]}/>)}
</ContentContainer>;

const ContentItem = ({ item }: { item: any }): JSX.Element => <ContentItemWrapper />;
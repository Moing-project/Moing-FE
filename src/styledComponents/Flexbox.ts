import styled from "styled-components";

export interface FlexContainerProps {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $gap?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  gap: ${(props) => props.$gap || 0};
`;

export default FlexContainer;

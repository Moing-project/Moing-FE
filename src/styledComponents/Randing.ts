import { styled } from "styled-components";
import { FlexBox } from "./types/FlexBoxType";
import { Viewport } from "./types/ViewportType";

const RendingSection = styled.section`
  padding: 80px 128px;
  display: flex;
  justify-content: center;
  height: 100vh;
  h2 {
    font-size: 28px;
    font-weight: 600;
    line-height: 38px;
  }
`;

const RendingContainer = styled.div<Viewport>`
  visibility: ${({ $isInViewport }) => ($isInViewport ? "visible" : "hidden")};

  &.animation {
    animation-name: opacity;
    animation-duration: 1000ms;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const RandingBox = styled.div<FlexBox>`
  display: flex;
  flex-direction: ${({ $Direction }) => $Direction};
  gap: ${({ $gap }) => ($gap ? $gap + "px" : "0")};
`;

export { RendingSection, RendingContainer, RandingBox };

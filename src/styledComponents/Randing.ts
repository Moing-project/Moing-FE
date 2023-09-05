import { styled } from "styled-components";
import { FlexBox } from "./types/FlexBoxType";
import { Viewport } from "./types/ViewportType";
import Slider from "react-slick";

const RendingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
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

const RandingSlider = styled(Slider)`
  width: 540px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.1);

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { RendingSection, RendingContainer, RandingBox, RandingSlider };

import React, { FC } from "react";
import { Flex, FlexProps } from "@react-yuki/ui";

export const SlideContainer: FC<FlexProps> = props => (
  <Flex
    {...props}
    __css={{
      position: "relative",
      ".swiper-container": {
        width: "100%",
        height: "20rem"
      },
      ".swiper-pagination": {
        "&.swiper-pagination-fraction": {
          color: "white",
          fontWeight: 5
        }
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1
      },
      ".swiper-pagination-bullet": {
        bg: "white",
        opacity: 1
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        bg: "dark"
      },
      "&#three-d-flip-effect": {
        ".swiper-container": {
          position: "relative",
          bg: "white"
        },
        ".swiper-slide": {
          backgroundPosition: "center",
          backgroundSize: "cover"
        },
        ".swiper-container, .swiper-slide": {
          width: "20rem",
          height: "20rem"
        },
        ".swiper-container-flip": {
          overflow: "visible",
          ".swiper-slide": {
            zIndex: 1,
            backfaceVisibility: "hidden",
            pointerEvents: "none",
            ".swiper-slide": {
              pointerEvents: "none"
            }
          },
          ".swiper-slide-active": {
            pointerEvents: "auto",
            ".swiper-slide-active": {
              pointerEvents: "auto"
            }
          },
          ".swiper-slide-shadow-top, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left, .swiper-slide-shadow-right": {
            zIndex: 0,
            backfaceVisibility: "hidden"
          }
        }
      }
    }}
  />
);

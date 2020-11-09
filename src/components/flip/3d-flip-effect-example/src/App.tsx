import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "./stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./Slider";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            m={0}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            3D Flip Effect - Example
          </Heading>
        </Box>
        <Box>
          <Slider
            id="three-d-flip-effect"
            hasImage
            params={{
              effect: "flip",
              grabCursor: true,
              pagination: {
                el: ".swiper-pagination"
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            }}
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;

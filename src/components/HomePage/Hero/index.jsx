import React from "react";

import Container from "components/container";
import Heading from "components/Heading";

import { HeroWrap, Span } from "./Styles";

const Hero = () => {
  return (
    <>
      <HeroWrap>
        <Container max={996}>
          <Heading>
            Hey, I’m Manuel! <br />{" "}
            <Span> A developer with a growing passion for design</Span>
          </Heading>
        </Container>
      </HeroWrap>
    </>
  );
};

export default Hero;

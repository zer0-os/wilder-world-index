import { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { isMobile } from "react-device-detect";

import Header from "components/Layout/Header";
import LinkButton from "components/LinkButton";

const HeroPage = styled.div`
  background: #111116 no-repeat center center / cover;

  &::after {
    position: absolute;
    top: auto;
    right: 0;
    left: -1px;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 20%;
    content: "";
    background: linear-gradient(180deg, rgba(17, 17, 22, 0), #111116 100%);
  }
`;

const videos = ["cyber_scene.mp4", "cave_scene.mp4", "space_scene.mp4"];

export default function Hero() {
  // const [showVideo, setShowVideo] = useState(false);
  const [videoNumber, setVideoNumber] = useState(null);

  useEffect(() => {
    const pick = Math.floor(Math.random() * videos.length);
    console.log(pick);
    setVideoNumber(pick);
  }, []);

  return (
    <HeroPage className="min-h-screen">
      {videoNumber !== null && !isMobile && (
        <div className="absolute z-0 w-full h-full opacity-40 overflow-hidden">
          <video
            className="absolute left-1/2 top-1/2 min-w-full max-w-none min-h-full"
            style={{ transform: "translate(-50%, -50%)" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={`/assets/video/${videos[videoNumber]}`} type="video/mp4" />
          </video>
        </div>
      )}
      <Header videoNumber={videoNumber} />
      <div
        className="absolute z-0 w-full h-full opacity-70 md:hidden"
        style={{ background: "url('/assets/background/image.jpg') #111116 no-repeat center center / cover" }}
      />
      <div className="absolute flex items-center justify-center w-full h-full">
        <Fade bottom cascade>
          <div className="text-center text-white">
            <div>
              <div className="text-glow font-special text-6xl md:text-7xl xl:text-8xl">Wilder World</div>
              {/* <div className="text-xl md:text-2xl xl:text-3xl">of the</div> */}
              {/* <div className="text-glow font-special text-6xl md:text-7xl xl:text-8xl">of the Future</div> */}
            </div>
            <div className="mt-2 px-10">
              <div className="text-base xl:text-xl">Decentralized NFT Market and Artist Guild</div>
            </div>
            <div className="flex justify-center mt-10">
              {/* <LinkButton className="text-glow box-glow cursor-pointer" size="large" onClick={(e) => setShowVideo(true)}>
              Watch Trailer
            </LinkButton> */}
              <LinkButton
                className="text-glow box-glow"
                href="https://pn2nq2l5rqu.typeform.com/to/kobQHc58"
                size="large"
                style="2"
              >
                Apply as an Artist
              </LinkButton>
              <LinkButton
                className="text-glow box-glow"
                href="https://pn2nq2l5rqu.typeform.com/to/V7uAhWcq"
                size="large"
                style="2"
              >
                Apply as a Collector
              </LinkButton>
            </div>
          </div>
        </Fade>
      </div>
    </HeroPage>
  );
}

import Head from "next/head";

import Footer from "components/Layout/Footer";

import Hero from "components/Hero";
import FinalCTA from "components/FinalCTA";
import Projects from "components/Projects";
import FeaturedArt from "components/FeaturedArt";
import LiquidArtMarket from "components/LiquidArtMarket";
import Token from "components/Token";
import FullVideoSection from "components/FullVideoSection";

import { LoaderStore, Loader } from "utils/compositeLoader";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Wilder World</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Decentralized NFT Market and Artist Guild" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@wilderworld_" />
        <meta name="twitter:title" content="Wilder World" />
        <meta name="twitter:description" content="Decentralized NFT Market and Artist Guild" />
        <meta name="twitter:creator" content="@iakshatmittal" />
        <meta name="twitter:image" content="https://www.wilderworld.com/assets/background/wilder.png" />

        <meta property="og:title" content="Wilder World" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.wilderworld.com" />
        <meta property="og:image" content="https://www.wilderworld.com/assets/background/wilder.png" />
        <meta property="og:description" content="Decentralized NFT Market and Artist Guild" />
        <meta property="og:site_name" content="Wilder World" />
        <meta property="fb:admins" content="100000581280466" />
      </Head>
      <LoaderStore>
        <Loader />
        <Hero />
        <FullVideoSection />
        <FeaturedArt />
        <Projects />
        <Token />
        <LiquidArtMarket />
        <FinalCTA />
        <Footer />
      </LoaderStore>
    </div>
  );
}

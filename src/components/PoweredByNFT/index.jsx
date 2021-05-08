import Fade from "react-reveal/Fade";

import Section from "components/Layout/Section";

import { SingleItem } from "components/Token";

export default function PoweredByNFT() {
  return (
    <Section name="tokens">
      <Fade bottom cascade>
        <div>
          <div className="text-glow text-4xl lg:text-6xl">Powered by NFTs</div>
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="flex col-span-3 items-center justify-center p-4">
                <div className="aspect-w-16 aspect-h-9 w-full border-2 border-wilder-purple rounded-md overflow-hidden">
                  <img src="/assets/screenshots/nft-view.jpg" />
                </div>
              </div>
              <div className="col-span-2 py-4 lg:pl-4">
                <SingleItem title="DAO Token" subtitle="Owned by the community, governs the revolution" />
                <SingleItem
                  title="Incentives Focused"
                  subtitle="Earn WILD for buying &amp; selling on Wilder World, accomplishing tasks, and more"
                />
                <SingleItem
                  title="Controls Capital Reserves"
                  subtitle="Governs LOOT token reserves, supply ratio and bonding curve metrics"
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Section>
  );
}

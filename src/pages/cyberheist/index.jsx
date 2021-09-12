import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AirWILD Metaverse Kicks NFT #CyberHeist</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://info.wilderworld.com/cyberheist/" />
        <meta property="og:title" content="AirWILD #CyberHeist" />
        <meta
          property="og:image"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/BJrE76z2vNijUzDo/airwild.jpeg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/BJrE76z2vNijUzDo/airwild.jpeg"
        />
        <meta property="fb:app_id" content="152351391599356" />
        <meta
          property="og:description"
          content="&#128176; Complete the heists for your chance to win &#128176;&#128142; 3: 1 of 1 Limited edition #CyberHeist NFTs &#128142;&#128095; AirWILD Kicks: Metaverse ready sneakers NFTs  &#128095;"
        />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          html {
            overflow: hidden;
          }
          `,
        }}
      />
      <div className="w-full h-full min-h-screen">
        <iframe
          src="https://gleam.io/OOE7T/airwild-metaverse-kicks-nft-cyberheist"
          frameBorder="0"
          allowFullScreen
          className="absolute w-full h-full"
        ></iframe>
      </div>
    </>
  );
}

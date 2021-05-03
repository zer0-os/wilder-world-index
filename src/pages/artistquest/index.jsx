import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wilder World #ArtistQuest</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.wilderworld.com/artistquest/" />
        <meta property="og:title" content="Wilder World #ArtistQuest" />
        <meta
          property="og:image"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/3H1y6uEOYKYKZNSN/wild-token.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/3H1y6uEOYKYKZNSN/wild-token.png"
        />
        <meta property="fb:app_id" content="152351391599356" />
        <meta
          property="og:description"
          content="Wilder World #ArtistQuest winning prizes&#65279;Upload your $WILD token themed art to win:&#128176; A Whitelist spot in the $WILD IDO on Polkastarter &#128176;&#127912; A special place in the Wilder World Artist Guild &#127912;&#128142; A chance to Mint your creation as an NFT with the Wilder Guild &#65279;&#128142;"
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
          src="https://gleam.io/KUX2t/artistquest"
          frameBorder="0"
          allowFullScreen
          className="absolute w-full h-full"
        ></iframe>
      </div>
    </>
  );
}

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>#CyberHeist - Wilder World</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.wilderworld.com/cyberheist/" />
        <meta property="og:title" content="#CyberHeist by Wilder World" />
        <meta
          property="og:image"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/jf9pyVW3Z2WXzHPS/cyber-heist-.jpeg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/jf9pyVW3Z2WXzHPS/cyber-heist-.jpeg"
        />
        <meta property="fb:app_id" content="152351391599356" />
        <meta property="og:description" content="Complete the heists and win limited editions Wilder NFTs" />
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
          src="https://gleam.io/r6iil/cyberheist"
          frameBorder="0"
          allowFullScreen
          className="absolute w-full h-full"
        ></iframe>
      </div>
    </>
  );
}

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>#CyberHeist - Wilder World</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://info.wilderworld.com/cyberheist/" />
        <meta property="og:title" content="Jake Paul&#39;s Lamborghini #CyberHeist" />
        <meta
          property="og:image"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/F9wkJNCKT4pZJeTG/upload.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/F9wkJNCKT4pZJeTG/upload.jpg"
        />
        <meta property="fb:app_id" content="152351391599356" />
        <meta
          property="og:description"
          content="💰💰 Complete the heists for your chance to win 💰 💎 1/1 Limited edition #CyberHeist NFTs 💎 🏎 Jake Paul's Lamborghini that you can race around in the Metaverse 🏎"
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
          src="https://gleam.io/RiFI9/jake-paul-cyberheist"
          frameBorder="0"
          allowFullScreen
          className="absolute w-full h-full"
        ></iframe>
      </div>
    </>
  );
}

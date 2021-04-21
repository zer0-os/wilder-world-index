import Head from "next/head";

export default function Home() {
  return (
    <div
      className="h-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/assets/cyberheist/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Head>
        <title>CyberHeist - Wilder World</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.wilderworld.com/cyberheist/" />
        <meta property="og:title" content="CyberHeist - Wilder World" />
        <meta
          property="og:image"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/EcTBqHZBcoPL9tup/screen-shot-2021-04-20-at-10.01.21-am.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content="https://d36eyd5j1kt1m6.cloudfront.net/user-assets/1753749/EcTBqHZBcoPL9tup/screen-shot-2021-04-20-at-10.01.21-am.png"
        />
        <meta property="fb:app_id" content="152351391599356" />
        <meta property="og:description" content="The journey begins" />
      </Head>
      <div className="flex items-center justify-center">
        <div className="mt-16 mx-4 w-full" style={{ maxWidth: "400px" }}>
          <a className="e-widget no-button generic-loader" href="https://gleam.io/0jaiQ/cyberheist" rel="nofollow">
            #CyberHeist
          </a>
          <script type="text/javascript" src="https://widget.gleamjs.io/e.js" async></script>
        </div>
      </div>
    </div>
  );
}

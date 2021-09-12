import "styles/tailwind.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("OGLICLUH", {
      includedDomains: ["wilderworld.com", "www.wilderworld.com", "info.wilderworld.com"],
      url: "https://parrotfish.wilderworld.com/script.js",
      honorDNT: false,
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

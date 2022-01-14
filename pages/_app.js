// @ts-nocheck
import Layout from "../src/partials/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { focusHandling } from "../src/utils/FocusHandling";
import AOS from "aos";

import "../src/css/styles.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 750,
      easing: "ease-in-out-quart",
    });
  }, []);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [router.pathname]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

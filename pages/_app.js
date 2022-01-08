// @ts-nocheck
import Layout from "../src/partials/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { focusHandling } from "../src/utils/FocusHandling";

import "../src/css/styles.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    focusHandling("outline");
  }, [router.pathname]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import Layout from "../src/partials/Layout";
import "../src/css/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

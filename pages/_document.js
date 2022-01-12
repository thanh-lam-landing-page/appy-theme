import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body className="bg-white font-inter antialiased text-gray-900 dark:bg-gray-900 dark:text-gray-100 tracking-tight">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head />

        <body>
          <h1>Hello from Las Vegas </h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

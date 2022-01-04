import React from "react";
// Modules
import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/dist/pages/_document";
import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-213701410-1`}
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-213701410-1');
          `,
            }}
          />
        </Head>
        <body className="dark:bg-[#121212] min-h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;

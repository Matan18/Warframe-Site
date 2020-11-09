import React from "react";
import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import favicon16 from "../assets/favicon-16x16.png";
import favicon32 from "../assets/favicon-32x32.png";
import favicon96 from "../assets/favicon-96x96.png";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;700;800&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Portfolio - Johann Holzmann"></meta>
          <meta property="image" content="./avatar.png"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
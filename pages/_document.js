import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Script } from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head> 
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
          {
            typeof window === "undefined" ? null : <script>if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"zachwunder",utcoffset:"-8"}))};sessionStorage.setItem("_swa","1");</script>
          }
        </body>
      </Html>
    )
  }
}

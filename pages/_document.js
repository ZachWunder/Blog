import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Script } from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head> 
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

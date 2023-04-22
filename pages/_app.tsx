import '../styles/globals.css';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <meta name='description' content='ページの説明文' />
        <meta name='keywords' content='キーワード1, キーワード2, キーワード3' /> */}
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

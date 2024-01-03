import type { NextPage } from 'next';

// components
import { Layout } from '@/components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Form } from '@/features/blog/pages/form';

const FormPage: NextPage = () => {
  const router = useRouter();
  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  return (
    <>
      <Head>
        <title>インタビュー募集</title>
        <meta
          name='description'
          content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='インタビュー募集' />
        <meta
          property='og:description'
          content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
        />
        <meta property='og:url' content={currentUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MacopeninSUTABA' />
        <meta
          name='twitter:description'
          content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
        />
        <meta
          name='twitter:image'
          content='https://management-bookshelf-admin.com/wp-content/uploads/2023/04/logo.webp'
        />
        <meta property='og:site_name' content='Innovate AI Voices' />
        <meta property='og:locale' content='ja_JP' />
        <link rel='canonical' href={`${currentUrl}`} />
      </Head>
      <Layout>
        <Form />
      </Layout>
    </>
  );
};

export default FormPage;

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
          content='経営者がおすすめする名著を紹介するメディア。ビジネスやリーダーシップの秘訣が詰まった書籍をご紹介します。経営者が選ぶ名著とその背景を掘り下げる記事メディア。起業家や経営者が学んだ教訓を共有します。'
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='インタビュー募集' />
        <meta
          property='og:description'
          content='経営者がおすすめする名著を紹介するメディア。ビジネスやリーダーシップの秘訣が詰まった書籍をご紹介します。経営者が選ぶ名著とその背景を掘り下げる記事メディア。起業家や経営者が学んだ教訓を共有します。'
        />
        <meta property='og:url' content={currentUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MacopeninSUTABA' />
        <meta
          name='twitter:description'
          content='経営者がおすすめする名著を紹介するメディア。ビジネスやリーダーシップの秘訣が詰まった書籍をご紹介します。経営者が選ぶ名著とその背景を掘り下げる記事メディア。起業家や経営者が学んだ教訓を共有します。'
        />
        <meta
          name='twitter:image'
          content='https://management-bookshelf-admin.com/wp-content/uploads/2023/04/logo.webp'
        />
        <meta property='og:site_name' content='経営者の本棚' />
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

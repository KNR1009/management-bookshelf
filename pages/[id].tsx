import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// page
import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';

import Head from 'next/head';
import { BlogFactory, BlogType } from '@/model/blog';
import { RecommendationFactory } from '@/model/recommendation';

type Props = {
  blog: BlogType;
  recommendations: BlogType[];
};
const Home: NextPage<Props> = ({ blog, recommendations }) => {
  const router = useRouter();
  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  return (
    <Layout>
      {blog && recommendations && (
        <>
          <Head>
            <title>{blog.title}</title>
            <meta
              name='description'
              content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
            />
            <meta property='og:type' content='article' />
            <meta property='og:title' content={blog.title} />
            <meta
              property='og:description'
              content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
            />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={blog.acf.image01} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@MacopeninSUTABA' />
            <meta name='twitter:title' content={blog.title} />
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
          <BlogDetail blog={blog} recommendations={recommendations} />
        </>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await BlogFactory().index();
  const paths = blogs.map((blog: BlogType) => ({ params: { id: blog.id.toString() } }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return { notFound: true };
  }

  try {
    const [blog, recommendations] = await Promise.all([
      BlogFactory().show(Number(id)),
      RecommendationFactory().index()
    ]);
    return { props: { blog, recommendations }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default Home;

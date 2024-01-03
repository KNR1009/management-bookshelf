import type { GetStaticProps, NextPage } from 'next';
// page
import { Blog } from '@/features/blog/pages';
// components
import { Layout } from '@/components/layout';

// Head
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogFactory, BlogType } from '@/model/blog';
import { RecommendationFactory } from '@/model/recommendation';
import { CategoryFactory, CategoryType } from '@/model/category';

type Props = {
  blogs: BlogType[];
  recommendations: BlogType[];
  categories: CategoryType[];
};

const Home: NextPage<Props> = ({ blogs, recommendations, categories }) => {
  const router = useRouter();

  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  return (
    <Layout>
      {blogs && categories && (
        <>
          <Head>
            <title>Innovate AI Voices | 記事一覧</title>
            <meta
              name='description'
              content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
            />
            <meta property='og:type' content='article' />
            <meta property='og:title' content='Innovate AI Voices' />
            <meta
              property='og:description'
              content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
            />
            <meta property='og:url' content={`${currentUrl}`} />
            <meta
              property='og:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/05/logo.png'
            />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@MacopeninSUTABA' />
            <meta name='twitter:title' content='Innovate AI Voices' />
            <meta
              name='twitter:description'
              content='「Innovate AI Voices」は、AI技術とその影響を深く掘り下げる専門メディアです。最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。AIの進化を追いかけ、未来を先取りするためのあなたの情報源です。'
            />
            <meta
              name='twitter:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/05/logo.png'
            />
            <meta property='og:site_name' content='Innovate AI Voices' />
            <meta property='og:locale' content='ja_JP' />
            <link rel='canonical' href={`${currentUrl}`} />
            <link rel='icon' href='/favicon.png' />
          </Head>
          <Blog categories={categories} blogs={blogs} recommendations={recommendations} />
        </>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const blogs = await BlogFactory().index();
    const recommendations = await RecommendationFactory().index();
    const categories = await CategoryFactory().index();

    return { props: { blogs, recommendations, categories }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { props: { blogs: [], recommendations: [], categories: [] }, revalidate: 60 };
  }
};

export default Home;

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
            <title>経営者の本棚 | 記事一覧</title>
            <meta
              name='description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta property='og:type' content='article' />
            <meta property='og:title' content='経営者の本棚' />
            <meta
              property='og:description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta property='og:url' content={`${currentUrl}`} />
            <meta
              property='og:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/05/logo.png'
            />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@MacopeninSUTABA' />
            <meta name='twitter:title' content='経営者の本棚' />
            <meta
              name='twitter:description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta
              name='twitter:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/05/logo.png'
            />
            <meta property='og:site_name' content='経営者の本棚' />
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

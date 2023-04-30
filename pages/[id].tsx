// import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// page
import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';

import Head from 'next/head';

// import { useFetchBlog } from '@/features/blog/hooks';
// import { useFetchRecommendations } from '@/features/recommendation/hooks';
import { BlogFactory, BlogType } from '@/model/blog';
import { RecommendationFactory } from '@/model/recommendation';

type Props = {
  blog: BlogType;
  recommendations: BlogType[];
};

const Home: NextPage<Props> = ({ blog, recommendations }) => {
  const router = useRouter();
  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  // const { blog } = useFetchBlog(Number(router.query.id));
  // const { recommendations } = useFetchRecommendations();

  return (
    <Layout>
      {blog && recommendations && (
        <>
          <Head>
            <title>{blog.title}</title>
            <meta
              name='description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta property='og:type' content='article' />
            <meta property='og:title' content={blog.title} />
            <meta
              property='og:description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={blog.acf.image01} />
            <meta name='twitter:card' content={blog.acf.image01} />
            <meta name='twitter:title' content={blog.title} />
            <meta
              name='twitter:description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta
              name='twitter:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/04/logo.webp'
            />
          </Head>
          <BlogDetail blog={blog} recommendations={recommendations} />
        </>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: 100件以上の投稿には対応できないのでどうにかする
  const blogs = await BlogFactory().index();
  const paths = blogs.map((data) => {
    return {
      params: {
        id: String(data.id)
      }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as {
    id: string;
  };
  const blog = await BlogFactory().show(Number(id));
  const recommendations = await RecommendationFactory().index();

  return {
    props: {
      blog: blog,
      recommendations: recommendations
    }
  };
};

export default Home;

import type { NextPage } from 'next';
// page
import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
// hooks
import { useFetchBlog } from '@/features/blog/hooks';
import { useFetchRecommendations } from '@/features/recommendation/hooks';

import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter();

  const { blog } = useFetchBlog(Number(router.query.id));
  const { recommendations } = useFetchRecommendations();

  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

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

export default Home;

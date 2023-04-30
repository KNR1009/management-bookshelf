import type { GetServerSideProps, NextPage } from 'next';
// page
import { Blog } from '@/features/blog/pages';
// components
import { Layout } from '@/components/layout';

// Head
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogFactory, BlogType } from '@/model/blog';

type Props = {
  blogs: BlogType[];
};

const Home: NextPage<Props> = ({ blogs }) => {
  const router = useRouter();
  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  console.log(blogs);
  return (
    <Layout>
      {blogs && (
        <>
          <Head>
            <title>経営者の本棚 | 記事一覧</title>
            <meta
              name='description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta property='og:type' content='article' />
            <meta property='og:title' content='経営者の本棚 | 記事一覧' />
            <meta
              property='og:description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta property='og:url' content={`${currentUrl}`} />
            <meta
              property='og:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/04/logo.webp'
            />
            <meta
              name='twitter:card'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/04/logo.webp'
            />
            <meta
              name='twitter:site'
              content='@MacopeninSUTABA
'
            />
            <meta name='twitter:title' content='経営者の本棚 | 記事一覧' />
            <meta
              name='twitter:description'
              content='経営者の本棚は、経営者がこれまで読んできたおすすめの書籍にフォーカスを当てて紹介をする記事メディアになっています。その中で経営者本人についてや提供サービスなども深ぼっています。'
            />
            <meta
              name='twitter:image'
              content='https://management-bookshelf-admin.com/wp-content/uploads/2023/04/logo.webp'
            />
          </Head>
          <Blog blogs={blogs} />
        </>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const blogs = await BlogFactory().index();
    return { props: { blogs } };
  } catch (error) {
    console.error(error);
    return { props: { blogs: [] } };
  }
};

export default Home;

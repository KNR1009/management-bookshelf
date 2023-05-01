import type { GetStaticProps, NextPage } from 'next';
// page
import { Blog } from '@/features/blog/pages';
// components
import { Layout } from '@/components/layout';

// Head
import Head from 'next/head';
import { useRouter } from 'next/router';
// import { BlogFactory, BlogType } from '@/model/blog';
import axios from 'axios';
import { useFetchBlogs } from '@/features/blog/hooks';
// import { useFetchBlogs } from '@/features/blog/hooks';

const Home: NextPage = (props) => {
  const router = useRouter();
  console.log(props);
  const currentUrl = process.browser ? window.location.origin + router.asPath : '';
  const { blogs } = useFetchBlogs();

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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios.get('https://developers-blog.third-scope-dev.com/wp-json/wp/v2/posts');
    return { props: { data }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { props: { blogs: [] }, revalidate: 60 };
  }
};

export default Home;

import type { GetStaticProps, NextPage } from 'next';
// page
import { Blog } from '@/features/blog/pages';
// components
import { Layout } from '@/components/layout';

// Head
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogType } from '@/model/blog';
import axios from 'axios';

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    // const blogs = await BlogFactory().index();
    const response = await axios.get('https://management-bookshelf-admin.com/wp-json/wp/v2/management_bookshelf');

    const blogs = response.data.map((i: any) => {
      return {
        id: i.id,
        date: i.date,
        title: i.title.rendered,
        content: i.content.rendered,
        acf: {
          company_name: i.acf.category_name,
          post: i.acf.post,
          name: i.acf.name,
          image01: String(i.acf.image01),
          image02: String(i.acf.image02),
          category_name: i.acf.category_name
        }
      };
    });
    return { props: { blogs }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { props: { blogs: [] }, revalidate: 60 };
  }
};

export default Home;

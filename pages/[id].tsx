import type { NextPage } from 'next';
// page
// import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';
// import { useRouter } from 'next/router';

// import Head from 'next/head';
// import { BlogFactory, BlogType } from '@/model/blog';
// import { RecommendationFactory } from '@/model/recommendation';

// type Props = {
//   blog: BlogType;
//   recommendations: BlogType[];
// };

const Home: NextPage = () => {
  // const router = useRouter();

  // const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  return (
    <Layout>
      <p>aaa</p>
      {/* {blog && recommendations && (
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
      )} */}
    </Layout>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const blogs = await BlogFactory().index();
//   const paths = blogs.map((blog: any) => ({ params: { id: blog.id.toString() } }));

//   return { paths, fallback: 'blocking' };
// };

// export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
//   const id = params?.id;
//   if (!id) {
//     return { notFound: true };
//   }

//   try {
//     const [blog, recommendations] = await Promise.all([
//       BlogFactory().show(Number(id)),
//       RecommendationFactory().index()
//     ]);
//     return { props: { blog, recommendations }, revalidate: 60 };
//   } catch (error) {
//     console.error(error);
//     return { notFound: true };
//   }
// };

export default Home;

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// components
import { Layout } from '@/components/layout';

// Head
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogType } from '@/model/blog';
import { useFetchCategories } from '@/features/categories/hooks';
import { CategoryBlogFactory, CategoryFactory } from '@/model/category';
import { CategoryBlogs } from '@/features/categories/pages/detail';

type Props = {
  blogs: BlogType[];
};

const Page: NextPage<Props> = ({ blogs }) => {
  const router = useRouter();
  const { categories } = useFetchCategories();

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
          </Head>
          <CategoryBlogs categories={categories} blogs={blogs} />
        </>
      )}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // すべてのカテゴリーを取得
  const categories = await CategoryFactory().index();

  // パスとしてカテゴリーIDを提供
  const paths = categories.map((category) => ({
    params: { id: category.id.toString() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return { notFound: true };
  }

  try {
    const [blogs] = await Promise.all([CategoryBlogFactory().index(Number(id))]);
    return { props: { blogs }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default Page;

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// components
import { Layout } from '@/components/layout';

// Head
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BlogType } from '@/model/blog';
import { CategoryBlogFactory, CategoryFactory, CategoryType } from '@/model/category';
import { CategoryBlogs } from '@/features/categories/pages/detail';

type Props = {
  blogs: BlogType[];
  categories: CategoryType[];
};

const Page: NextPage<Props> = ({ blogs, categories }) => {
  const router = useRouter();
  const id = router.query.id;
  const categoryName = categories.find((i) => i.id === Number(id))?.name;
  const currentUrl = process.browser ? window.location.origin + router.asPath : '';

  return (
    <Layout>
      {blogs && categories && categoryName && (
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
          </Head>
          <CategoryBlogs categories={categories} blogs={blogs} categoryName={categoryName} />
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
    const categories = await CategoryFactory().index();

    return { props: { blogs, categories }, revalidate: 60 };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default Page;

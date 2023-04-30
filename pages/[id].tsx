import type { NextPage } from 'next';
// page
import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
// hooks
import { useFetchBlog } from '@/features/blog/hooks';
import { useFetchRecommendations } from '@/features/recommendation/hooks';

const Home: NextPage = () => {
  const router = useRouter();

  const { blog } = useFetchBlog(Number(router.query.id));
  const { recommendations } = useFetchRecommendations();

  return <Layout>{blog && recommendations && <BlogDetail blog={blog} recommendations={recommendations} />}</Layout>;
};

export default Home;

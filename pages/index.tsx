import type { NextPage } from 'next';
// page
import { Blog } from '@/features/blog/pages';
// components
import { Layout } from '@/components/layout';
import { useFetchBlogs } from '@/features/blog/hooks';

const Home: NextPage = () => {
  const { blogs } = useFetchBlogs();

  return <Layout>{blogs && <Blog blogs={blogs} />}</Layout>;
};

export default Home;

import type { NextPage } from 'next';
import { Blog } from '@/features/blog/pages';
import { Layout } from '@/components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
};

export default Home;

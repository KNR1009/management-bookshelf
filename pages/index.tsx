import type { NextPage } from 'next';
// page
import { Blog } from '@/features/blog/pages';
// components
import { Layout } from '@/components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
};

export default Home;

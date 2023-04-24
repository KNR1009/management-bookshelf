import type { NextPage } from 'next';
// page
import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <BlogDetail />
    </Layout>
  );
};

export default Home;

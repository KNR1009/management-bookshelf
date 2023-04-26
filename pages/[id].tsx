import type { NextPage } from 'next';
// page
import { BlogDetail } from '@/features/blog/pages/[id]';
// components
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { useFetchBlog } from '@/features/blog/hooks';
// hooks
import { useEffect, useState } from 'react';
// model
import { BlogType } from '@/model/blog';

const Home: NextPage = () => {
  const router = useRouter();

  const { blog } = useFetchBlog(Number(router.query.id));

  return <Layout>{blog && <BlogDetail blog={blog} />}</Layout>;
};

export default Home;

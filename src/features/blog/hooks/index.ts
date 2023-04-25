import { BlogFactory, BlogType } from '@/model/blog';
import { useState } from 'react';
import { useAsync } from 'react-use';

// お気に入りの薬局
export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useAsync(async () => {
    try {
      setIsFetching(true);
      const response = await BlogFactory().index();
      setBlogs(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);
  return {
    blogs: blogs,
    isFetching: isFetching
  };
};

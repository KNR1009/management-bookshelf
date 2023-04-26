import { BlogFactory, BlogType } from '@/model/blog';
import { useState } from 'react';
import { useAsync } from 'react-use';

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

export const useFetchBlog = (id: number) => {
  const [blog, setBlog] = useState<BlogType>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useAsync(async () => {
    try {
      setIsFetching(true);
      if (id) {
        const response = await BlogFactory().show(id);
        setBlog(response);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, [id]);
  return {
    blog: blog,
    isFetching: isFetching
  };
};

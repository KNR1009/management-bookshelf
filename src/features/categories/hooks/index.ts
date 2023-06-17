import { BlogType } from '@/model/blog';
import { CategoryBlogFactory, CategoryFactory, CategoryType } from '@/model/category';
import { useState } from 'react';
import { useAsync } from 'react-use';

// カテゴリー一覧の取得
export const useFetchCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useAsync(async () => {
    try {
      setIsFetching(true);
      const response = await CategoryFactory().index();
      setCategories(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);
  return {
    categories: categories,
    isFetching: isFetching
  };
};

// カテゴリーに紐づく記事の取得
export const useFetchCategoryBlog = (id: number) => {
  const [blogs, setBlogs] = useState<BlogType[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useAsync(async () => {
    try {
      setIsFetching(true);
      const response = await CategoryBlogFactory().index(id);
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

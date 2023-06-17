import { CategoryFactory, CategoryType } from '@/model/category';
import { useState } from 'react';
import { useAsync } from 'react-use';

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

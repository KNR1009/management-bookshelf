import { WpApiClient } from '@/lib/wp-api-clinet';
import { CategoryType } from '@/model/category';

export type CategoryRepository = {
  getCategories: () => Promise<CategoryType[]>;
};

const getCategories = async (): Promise<CategoryType[]> => {
  const { data } = await WpApiClient.get(`/categories`);

  const result = data.map((i: any) => {
    return {
      id: i.id,
      count: i.count,
      description: i.description,
      name: i.name,
      slug: i.slug
    };
  });

  return result;
};

export const categoryRepository: CategoryRepository = {
  getCategories
};

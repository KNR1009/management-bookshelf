import { WpApiClient } from '@/lib/wp-api-clinet';
import { CategoryType } from '@/model/category';

export type CategoryRepository = {
  getCategories: () => Promise<CategoryType[]>;
};

const getCategories = async (): Promise<CategoryType[]> => {
  const { data } = await WpApiClient.get(`/categories`);

  const result: CategoryType[] = data.map((i: any) => {
    return {
      id: i.id,
      count: i.count,
      description: i.description,
      name: i.name,
      slug: i.slug
    };
  });

  return result.filter((i) => i.name !== '未分類' && i.name !== 'おすすめの記事');
};

export const categoryRepository: CategoryRepository = {
  getCategories
};

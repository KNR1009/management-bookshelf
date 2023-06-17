import { categoryRepository, CategoryRepository } from '@/repositories/category_repositories';

export type CategoryType = {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
};

export const CategoryFactory = (rep?: CategoryRepository) => {
  const repository = rep ?? categoryRepository;
  return {
    index: async (): Promise<CategoryType[]> => {
      const response = await repository.getCategories();
      return response;
    }
  };
};

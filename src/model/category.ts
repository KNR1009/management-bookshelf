import { categoryRepository, CategoryRepository } from '@/repositories/category_repositories';
import { BlogType } from './blog';

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

export const CategoryBlogFactory = (rep?: CategoryRepository) => {
  const repository = rep ?? categoryRepository;
  return {
    index: async (id: number): Promise<BlogType[]> => {
      const response = await repository.getCategoryBlogs(id);
      return response;
    }
  };
};

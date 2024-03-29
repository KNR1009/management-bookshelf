import { blogRepository, BlogRepository } from '@/repositories/blog_repositories';

export type BlogType = {
  id: number;
  date: string;
  title: string;
  content: string;
  acf: {
    company_name: string;
    post: string;
    name: string;
    name_kana: string;
    profile_text: string;
    image01: string;
    image02: string;
    category_name: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    other_link: string;
    business: string;
    establishment: string;
    company_hp: string;
  };
};

export const BlogFactory = (rep?: BlogRepository) => {
  const repository = rep ?? blogRepository;
  return {
    index: async (): Promise<BlogType[]> => {
      const response = await repository.getBlogs();
      return response;
    },
    show: async (id: number): Promise<BlogType> => {
      const response = await repository.getBlog(id);
      return response;
    }
  };
};

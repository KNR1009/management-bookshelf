import { WpApiClient } from '@/lib/wp-api-clinet';
import { BlogType } from '@/model/blog';

export type BlogRepository = {
  getBlogs: () => Promise<BlogType[]>;
};
const getBlogs = async (): Promise<BlogType[]> => {
  const response = await WpApiClient.get(`/management_bookshelf`);
  return response.data.map((i: any) => {
    return {
      id: i.id,
      date: i.date,
      title: i.title.rendered,
      content: i.content.rendered,
      acf: {
        company_name: i.acf.category_name,
        post: i.acf.post,
        name: i.acf.name,
        image01: String(i.acf.image01),
        image02: String(i.acf.image02)
      }
    };
  });
};

export const blogRepository: BlogRepository = {
  getBlogs
};

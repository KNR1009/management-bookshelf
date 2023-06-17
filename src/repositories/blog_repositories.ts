import { WpApiClient } from '@/lib/wp-api-clinet';
import { BlogType } from '@/model/blog';

export type BlogRepository = {
  getBlogs: () => Promise<BlogType[]>;
  getBlog: (id: number) => Promise<BlogType>;
};
const getBlogs = async (): Promise<BlogType[]> => {
  const response = await WpApiClient.get(`/management_bookshelf?per_page=100`);

  const blogs = response.data.map((i: any) => {
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
        image02: String(i.acf.image02),
        category_name: i.acf.category_name,
        twitter: i.acf.twitter,
        facebook: i.acf.facebook,
        linkedin: i.acf.linkedin,
        other_link: i.acf.other_link,
        business: i.acf.business,
        establishment: i.acf.establishment,
        company_hp: i.acf.company_hp
      }
    };
  });

  return (
    // Sort the blogs array by date in ascending order (oldest first)
    blogs.sort((a: BlogType, b: BlogType) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
  );
};

const getBlog = async (id: number): Promise<BlogType> => {
  const { data } = await WpApiClient.get(`/management_bookshelf/${id}`);
  return {
    id: data.id,
    date: data.date,
    title: data.title.rendered,
    content: data.content.rendered,
    acf: {
      company_name: data.acf.company_name,
      post: data.acf.post,
      name: data.acf.name,
      image01: String(data.acf.image01),
      image02: String(data.acf.image02),
      category_name: data.acf.category_name,
      twitter: data.acf.twitter,
      facebook: data.acf.facebook,
      linkedin: data.acf.linkedin,
      other_link: data.acf.other_link,
      business: data.acf.business,
      establishment: data.acf.establishment,
      company_hp: data.acf.company_hp
    }
  };
};

export const blogRepository: BlogRepository = {
  getBlogs,
  getBlog
};

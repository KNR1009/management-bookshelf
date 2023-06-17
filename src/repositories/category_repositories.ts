import { WpApiClient } from '@/lib/wp-api-clinet';
import { BlogType } from '@/model/blog';
import { CategoryType } from '@/model/category';

export type CategoryRepository = {
  getCategories: () => Promise<CategoryType[]>;
  getCategoryBlogs: (id: number) => Promise<BlogType[]>;
};

// カテゴリー一覧の取得
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

// 該当のカテゴリーの記事を取得
const getCategoryBlogs = async (id: number): Promise<BlogType[]> => {
  const response = await WpApiClient.get(`/management_bookshelf?categories=${id}`);

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

export const categoryRepository: CategoryRepository = {
  getCategories,
  getCategoryBlogs
};

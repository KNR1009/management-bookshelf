// おすすめの記事

import { WpApiClient } from '@/lib/wp-api-clinet';
import { BlogType } from '@/model/blog';

export type RecommendationRepository = {
  getRecommendations: () => Promise<BlogType[]>;
};
const getRecommendations = async (): Promise<BlogType[]> => {
  const response = await WpApiClient.get(`/management_bookshelf?categories=5`);
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
        category_name: i.acf.category_name
      }
    };
  });
  // 取得したおすすめ記事を3件ランダムに選ぶようなロジックを追加する
  return (
    // Sort the blogs array by date in ascending order (oldest first)
    blogs.sort((a: BlogType, b: BlogType) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
  );
};

export const recommendationRepository: RecommendationRepository = {
  getRecommendations
};

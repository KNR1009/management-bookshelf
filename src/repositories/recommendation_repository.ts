// おすすめの記事

import { WpApiClient } from '@/lib/wp-api-clinet';
import { BlogType } from '@/model/blog';

export type RecommendationRepository = {
  getRecommendations: () => Promise<BlogType[]>;
};

// ランダムデータを取得するロジック
function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
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
  const shuffledBlogs = shuffleArray(blogs);
  const randomBlogs = shuffledBlogs.slice(0, 3);
  return randomBlogs;
};

export const recommendationRepository: RecommendationRepository = {
  getRecommendations
};

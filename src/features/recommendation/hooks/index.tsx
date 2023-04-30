import { BlogType } from '@/model/blog';
import { RecommendationFactory } from '@/model/recommendation';
import { useState } from 'react';
import { useAsync } from 'react-use';
/**
 * カスタムフック: useFetchRecommendations
 *
 * ## 責務
 *
 * 1. おすすめブログ一覧を取得する (カテゴリー番号5)
 */
export const useFetchRecommendations = () => {
  const [recommendations, setRecommendation] = useState<BlogType[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useAsync(async () => {
    try {
      setIsFetching(true);
      const response = await RecommendationFactory().index();
      setRecommendation(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);
  return {
    recommendations: recommendations,
    isFetching: isFetching
  };
};

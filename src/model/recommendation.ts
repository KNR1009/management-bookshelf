import { recommendationRepository, RecommendationRepository } from '@/repositories/recommendation_repository';
import { BlogType } from './blog';

export const RecommendationFactory = (rep?: RecommendationRepository) => {
  const repository = rep ?? recommendationRepository;
  return {
    index: async (): Promise<BlogType[]> => {
      const response = await repository.getRecommendations();
      return response;
    }
  };
};

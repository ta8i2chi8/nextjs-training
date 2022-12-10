import { Group, Tag, TeamMembership, User } from "src/types";
import { apiClient } from "./apiClient";

type GetArticlesParams = {
  query: string,
  per_page?: number,  
}

type GetArticlesResponse = {
  rendered_body: string,
  body: string,
  coediting: boolean,
  comments_count: number,
  created_at: string,
  group: Group,
  id: string,
  likes_count: number,
  private: boolean,
  reactions_count: number,
  tags: Tag[],
  title: string,
  updated_at: string,
  url: string,
  user: User,
  page_views_count: number,
  team_membership: TeamMembership,
}

export const getArticlesService = async ({ query, per_page }: GetArticlesParams): Promise<Array<GetArticlesResponse>> => {
  const response = await apiClient.get<Array<GetArticlesResponse>>(
    '/items',
    {
      params: {
        query: query,
        per_page: per_page ?? 25,
      },
    }
  )
  return response.data
}
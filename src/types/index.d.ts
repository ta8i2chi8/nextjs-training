export type User = {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
}

export type Group = {
  created_at: string,
  description: string,
  name: string,
  private: boolean,
  updated_at: string,
  url_name: string,
}

export type Tag = {
  name: string,
  versions: string[],
}

export type TeamMembership = {
  name: string,
}

export type Article = {
  id: string,
  title: string,
  likes_count: number,
  user: User,
}
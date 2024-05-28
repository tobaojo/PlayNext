import { z } from 'zod';

export const gameSchema = z.object({
  id: z.number(),
  title: z.string(),
  thumbnail: z.string(),
  short_description: z.string(),
  game_url: z.string(),
  genre: z.string(),
  platform: z.string(),
  publisher: z.string(),
  developer: z.string(),
  release_date: z.string(),
  freetogame_profile_url: z.string(),
});

export type Game = z.infer<typeof gameSchema>;

export const newsSchema = z.object({
  id: z.number(),
  short_description: z.string(),
  thumbnail: z.string(),
  main_image: z.string(),
  article_content: z.string(),
  article_url: z.string(),
});

export type News = z.infer<typeof newsSchema>;

export type ComponentProps = {
  news?: News[];
  games?: Game[];
};

export type Colours = {
  [key: string]: string;
};

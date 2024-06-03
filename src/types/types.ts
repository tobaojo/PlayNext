import { SyntheticEvent } from 'react';
import { z } from 'zod';

const screenshotSchema = z.object({
  id: z.number(),
  image: z.string(),
});

// const minimumRequirements = z.object({
//   graphics: z.string(),
//   memory: z.string(),
//   processor: z.string(),
//   os: z.string(),
//   storage: z.string(),
//   strip: z.string().optional(),
// });

export type Screenshots = z.infer<typeof screenshotSchema>;

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
  description: z.string().optional(),
  status: z.string().optional(),
  screenshots: z.array(screenshotSchema).optional(),
  minimum_system_requirements: z
    .object({
      graphics: z.string(),
      memory: z.string(),
      processor: z.string(),
      os: z.string(),
      storage: z.string(),
      strip: z.string().optional(),
    })
    .optional(),
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
  screenshots?: Screenshots[];
  text?: string;
  genres?: string[];
  handleClick?: (e: SyntheticEvent) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Colours = {
  [key: string]: string;
};

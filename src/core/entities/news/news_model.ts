import { HeroNewsModel } from "./hero_news_model";
import { NewsHeroModel } from "./news_hero_model";

export interface NewsModel {
  hero?: NewsHeroModel;
  featured?: HeroNewsModel;
  posts?: Array<HeroNewsModel>;
  categories?: Array<string>;
}

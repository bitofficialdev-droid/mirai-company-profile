import { AboutCoreValueModel } from "./about_core_value_model";
import { AboutHeroModel } from "./about_hero_model";
import { AboutJoinModel } from "./about_join_model";
import { AboutStoryModel } from "./about_story_model";
import { AboutTeamsModel } from "./about_teams_model";

export interface AboutModel {
  hero?: AboutHeroModel;
  story?: AboutStoryModel;
  value?: AboutCoreValueModel;
  teams?: AboutTeamsModel;
  join?: AboutJoinModel;
}

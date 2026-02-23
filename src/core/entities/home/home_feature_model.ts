import { HomeFeatureItemModel } from "./home_feature_item_model";

export interface HomeFeatureModel {
  title?: string;
  mobile?: Array<HomeFeatureItemModel>;
  dekstop?: Array<HomeFeatureItemModel>;
}

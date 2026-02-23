import { HomeContactModel } from "./home_contact_model";
import { HomeHeroModel } from "./home_hero_model";
import { HomeTrustedModel } from "./home_trusted_model";
import { HomePartnerModel } from "./home_partner_model";
import { HomePortfoliosModel } from "./home_portfolios_model";
import { HomeServicesModel } from "./home_services_model";
import { HomeStatModel } from "./home_stat_model";
import { HomeReviewsModel } from "./home_reviews_model";
import { HomeFaqModel } from "./home_faq_model";
import { HomeFeatureModel } from "./home_feature_model";

export interface HomeModel {
  hero?: HomeHeroModel;
  trusted?: Array<HomeTrustedModel>;
  service?: HomeServicesModel;
  partner?: HomePartnerModel;
  feature?: HomeFeatureModel;
  stats?: Array<HomeStatModel>;
  portfolio?: HomePortfoliosModel;
  review?: HomeReviewsModel;
  faq?: HomeFaqModel;
  contact?: HomeContactModel;
}

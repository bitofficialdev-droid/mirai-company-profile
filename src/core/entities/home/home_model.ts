import { HomeContactModel } from "./home_contact_model";
import { HomeHeroModel } from "./home_hero_model";
import { HomeTrustedModel } from "./home_trusted_model";
import { HomePartnerModel } from "./home_partner_model";
import { HomePortfoliosModel } from "./home_portfolios_model";
import { HomeServicesModel } from "./home_services_model";
import { HomeStatModel } from "./home_stat_model";
import { HomeReviewsModel } from "./home_reviews_model";

export interface HomeModel {
  hero?: HomeHeroModel;
  trusted?: Array<HomeTrustedModel>;
  service?: HomeServicesModel;
  partner?: HomePartnerModel;
  stats?: Array<HomeStatModel>;
  portfolio?: HomePortfoliosModel;
  review?: HomeReviewsModel;
  contact?: HomeContactModel;
}

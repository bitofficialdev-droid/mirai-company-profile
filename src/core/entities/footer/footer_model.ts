import { FooterAboutModel } from "./footer_about_model";
import { FooterFeatureModel } from "./footer_feature_model";
import { FooterLeadingModel } from "./footer_leading_model";
import { FooterResourceModel } from "./footer_resource_model";

export interface FooterModel {
  leading?: FooterLeadingModel;
  features?: Array<FooterFeatureModel>;
  resources?: Array<FooterResourceModel>;
  about?: Array<FooterAboutModel>;
}

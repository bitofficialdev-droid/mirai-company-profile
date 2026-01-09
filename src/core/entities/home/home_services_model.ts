import { HomeServiceModel } from "./home_service_model";

export interface HomeServicesModel {
  title?: string;
  description?: string;
  services?: Array<HomeServiceModel>;
}

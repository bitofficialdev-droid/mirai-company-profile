import { AboutEmployeeModel } from "./about_employee_model";

export interface AboutTeamsModel {
  title?: string;
  description?: string;
  team?: Array<AboutEmployeeModel>;
}

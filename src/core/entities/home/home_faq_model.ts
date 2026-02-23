import { HomeQuestionModel } from "./home_question_model";

export interface HomeFaqModel {
  title?: string;
  description?: string;
  faqs?: Array<HomeQuestionModel>;
}

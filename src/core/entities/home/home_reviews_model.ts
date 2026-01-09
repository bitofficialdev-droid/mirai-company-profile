import { HomeCommentModel } from "./home_comment_model";

export interface HomeReviewsModel {
  title?: string;
  comments?: Array<HomeCommentModel>;
}

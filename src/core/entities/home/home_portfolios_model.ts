import { HomePortfolioModel } from "./home_portfolio_model";

export interface HomePortfoliosModel {
  title?: string;
  description?: string;
  portfolios?: Array<HomePortfolioModel>;
}

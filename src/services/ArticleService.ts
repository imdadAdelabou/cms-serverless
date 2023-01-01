import { Article } from "../helpers/constant";

class ArticleService {
  private baseUrl: string = "https://j76sewpid3.execute-api.eu-west-3.amazonaws.com/api";

  async getAll(token: string): Promise<Article[]> {
    return await fetch(this.baseUrl + '/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(res => res.json());
  }

  async create(article: Article, token: string): Promise<Article> {
    return await fetch(this.baseUrl + '/', {
      method: 'POST',
      body: JSON.stringify(article),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(res => res.json());
  }
};

export default new ArticleService();
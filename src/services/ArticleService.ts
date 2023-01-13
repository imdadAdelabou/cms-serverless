import { Article } from "../helpers/constant";

class ArticleService {
  private baseUrl: string = "https://3xws3wb3u9.execute-api.us-east-1.amazonaws.com/api";

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
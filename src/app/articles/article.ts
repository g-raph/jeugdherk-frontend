export interface Article {
  Title: string;
  Text: string;
  Images: ArticleImage[];
  categories: ArticleCategory[];
  Slug?: string;
  id: string;
  updated_at: string;
}

export interface ArticleCategory {
  name: string;
  slug: string;
}

export interface ArticleImage {
  url: string;
}

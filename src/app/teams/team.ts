export interface Team {
  title: string;
  text?: string;
  slug: string;
  images?: TeamImage[];
  articles?: TeamArticle[];
  timeslots?: TeamEvent[];
  categories?: TeamCategory[];
  players?: string;
  trainer?: string;
  staff?: string;
  competition?: string;
}

export interface TeamCategory {
  name: string;
  slug: string;
}

export interface TeamArticle {
  Title: string;
  Slug: string;
}

export interface TeamEvent {
  title: string;
  slug: string;
}

export interface TeamImage {
  url: string;
}

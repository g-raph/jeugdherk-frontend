export interface EventItem {
  title: string;
  text: string;
  slug: string;
  startdate: string;
  enddate?: string;
  categories?: EventCategory[];
  images?: EventImage[]; 
}

export interface EventCategory {
  name: string;
  slug: string;
}

export interface EventImage {
  url: string;
}

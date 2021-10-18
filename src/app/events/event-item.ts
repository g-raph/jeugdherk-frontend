export interface EventItem {
  title: string;
  text: string;
  slug: string;
  startdate: string;
  enddate?: string;
  categories?: EventCategory[];
}

export interface EventCategory {
  name: string;
  slug: string;
}

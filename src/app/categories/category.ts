import { Article } from '../articles/article';
import { EventItem } from '../events/event-item';

export interface Category {
    created_at: string;
    name: string;
    published_at: string;
    image?: {
        url: string;
    };
    updated_at: string;
    articles?: Article[];
    events?: EventItem[];
    slug?: string;
    id: number;
}

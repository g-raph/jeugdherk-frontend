import { Treatment } from '../treatments/treatment';

export interface Category {
    created_at: string;
    name: string;
    published_at: string;
    image: {
        url: string;
    };
    updated_at: string;
    treatments: Treatment[];
    slug?: string;
    id: number;
}

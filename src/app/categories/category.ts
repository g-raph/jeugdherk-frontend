import { Treatment } from '../treatments/treatment';

export interface Category {
    created_at: string;
    name: string;
    published_at: string;
    updated_at: string;
    treatments: Treatment[];
    id: number;
}

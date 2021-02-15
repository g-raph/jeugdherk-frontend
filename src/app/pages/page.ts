export interface Page {
    body: string;
    images: PageImage[];
    title: string;
    created_at: string;
    id: number;
    published_at: string;
    updated_at: string;
}

export interface PricelistPage {
    id: number;
    title: string;
    description: string;
}

export interface PageImage {
    url: string;
}

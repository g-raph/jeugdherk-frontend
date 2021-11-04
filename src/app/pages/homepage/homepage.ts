export interface Homepage {
    Title: string;
    body: string;
    created_at: string;
    id: number;
    images: HomepageImage[];
    published_at: string;
    updated_at: string;
}

export interface HomepageImage {
    url: string;
}

export interface InfoBlock {
    title: string;
    text: string;
}

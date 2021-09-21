export interface Treatment {
    title: string;
    description: string;
    images: TreatmentImage[];
    categories: TreatmentCategory[];
    slug?: string;
    id: string;
    price: number;
}

export interface TreatmentCategory {
    name: string;
    slug: string;
}

export interface TreatmentImage {
    url: string;
}

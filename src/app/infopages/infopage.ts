export interface Infopage {
    title: string;
    text?: string;
    images?: [{
        url: string;
    }];
    slug: string;
    downloadfiles?: [{
        name?: string;
        url?: string;
    }]
}

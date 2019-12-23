export interface OrganicResult {
    id: number;
    title: string;
    link: string;
    displayed_link: string;
    date: string;
    snippet: string;
    sitelinks: {
        inline: inlineLink[]
    };
}

export interface inlineLink {
    title: string;
    link: string;
}

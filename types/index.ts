export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    featured?: boolean;
    summary: string;
    liveUrl?: string;
    sourceCode?: string;
}

export interface IPublication {
    title: string;
    authors: string;
    status: string;
    venue?: string;
    year: string;
    note?: string;
    summary?: string;
    contribution?: string;
    links: { label: string; url: string }[];
}

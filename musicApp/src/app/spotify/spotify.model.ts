

export interface ExternalUrls {
    spotify: string;
}

export interface IArtist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface IImage {
    height: number;
    url: string;
    width: number;
}

export interface IItem {
    album_type: string;
    artists: IArtist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: IImage[];
    name: string;
    type: string;
    uri: string;
}

export interface IAlbums {
    href: string;
    items: IItem[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
}

export interface RootObject {
    albums: IAlbums;
}




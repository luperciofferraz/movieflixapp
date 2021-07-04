export type MoviesResponse = {

    content: Movie[];
    totalPages: number;

}

export type Movie = {

    id: number;
    title: string;
    subTitle: string;
    synopsis: string;
    imgUrl: string;
    year: number;
    genreId: number;
    reviews: Review[];

}

export type Genre = {

    id: number;
    name: string;

}

export type Review = {

    id: number;
    text: string;
    user: User;

}

export type User = {

    id: number;
    name: string;

}

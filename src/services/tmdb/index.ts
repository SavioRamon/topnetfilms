import { ApiResultListTypes, FilmTypes, GenreListTypes, HomeList } from "../../store/ducks/filmList";

const BASE_API = "https://api.themoviedb.org/3";
const API_KEY = "3783a8ddb11beaabb09ac6d2dad893f8";
const otherInfos = `language=en&api_key=${API_KEY}`;

const basicFetch = async (reqDetails: string) => {
    const data = await fetch(`${BASE_API}/${reqDetails}&${otherInfos}`);
    if(data.status === 200) {
        const json = await data.json();
        return json;

    } else {
        return undefined;
    }
};

export const tmdb = {

    getHomeListData: async (): Promise<HomeList> => {
        return [
            {
                title: "Popular",
                data: await basicFetch("movie/popular?")
            },
            {
                title: "Trending",
                data: await basicFetch("trending/movie/day?")
            }
        ];
    },

    getSingleFilm: async (id: string) => {
        const Film: FilmTypes | undefined = await basicFetch(`movie/${id}?`);
        return Film;
    },

    getSearchResults: async (query: string) => {
        query = encodeURI(query);
        const results: ApiResultListTypes | undefined = await basicFetch(`search/movie?${query}`);
        return results;
    },

    getGenreResults: async (query: string) => { 
        query = encodeURI(query);
        const results: ApiResultListTypes | undefined = await basicFetch(`discover/movie?${query}`);
        return results;
    },

    getGenreList: async () => {
        const results: GenreListTypes | undefined = await basicFetch(`genre/movie/list?`);
        return results;
    },

    multipleSearch: async (filmListIDs: number[]) => {  
        const results: Array<FilmTypes | undefined> = [];
        for(const id of filmListIDs) {
            const film: FilmTypes | undefined = await basicFetch(`movie/${id}?`);
            results.push(film);
        }

        return results;
    }
};

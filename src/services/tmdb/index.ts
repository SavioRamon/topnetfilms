const BASE_API = "https://api.themoviedb.org/3";
const API_KEY = "3783a8ddb11beaabb09ac6d2dad893f8";
const otherInfos = `language=en&api_key=${API_KEY}`;

const basicFetch = async (reqDetails: string) => {
    const data = await fetch(`${BASE_API}/${reqDetails}&${otherInfos}`);
    const json = await data.json();
    return json;
};

export const tmdbGetHomeListData = async () => {
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
};

export const tmdbGetSingleFilm = async (id: string) => {
    const Film = await basicFetch(`movie/${id}?`);
    return Film;
};
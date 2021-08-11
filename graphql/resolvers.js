import {getMovies, getMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovie(id),
    }
};

export default resolvers;
import {getMovies} from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        //movie: (_,arg) => 
    }
};

export default resolvers;
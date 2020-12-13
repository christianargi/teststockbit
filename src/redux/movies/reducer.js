import {
  HANDLE_STATE,
  SET_MOVIE_LIST,
  SET_LOADER,
  SET_HAS_MORE,
  SET_MOVIE_DETAIL,
  SET_MOVIE_LIST_PART
} from '../../types/constants'

const initState = {
  movieName: "",
  prevMovieList: [],
  loading: false,
  error: false,
  movielist: [],
  hasMore: false,
  movieTitle: "",
  movieYear: "",
  movieType: "",
  movieImage: ""
};

export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loading: action.isLoading,
      };
    case SET_HAS_MORE:
      return {
        ...state,
        hasMore: action.hasMore,
      };
    case HANDLE_STATE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case SET_MOVIE_LIST:
      return {
        ...state,
        prevMovieList: action.payload
      };
    case SET_MOVIE_DETAIL:
      return {
        ...state,
        movieTitle: action.payload.Title,
        movieYear: action.payload.Year,
        movieType: action.payload.Type,
        movieImage: action.payload.Poster
      };
    case SET_MOVIE_LIST_PART:
      return {
        ...state,
        movielist: action.payload
      };
    default:
      return state;
  }
}

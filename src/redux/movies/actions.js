import {
  HANDLE_STATE,
  GET_MOVIE_LIST,
  SET_LOADER,
  SET_HAS_MORE,
  GET_MOVIE_DETAIL,
  PUSH_MOVIES
} from '../../types/constants'

const movieActions = {
  setLoading: (loading) => (
    {
      type: SET_LOADER,
      loading
    }),
  setHasMore: (hasMore) => (
    {
      type: SET_HAS_MORE,
      hasMore
    }),
  handleState: (field, value) => (
    {
      type: HANDLE_STATE,
      field,
      value
    }),
  getMovies: (pageNo) => (
    {
      type: GET_MOVIE_LIST,
      pageNo
    }),
  getDetail: (id) => (
    {
      type: GET_MOVIE_DETAIL,
      id
    }),
  pushMovies: (pageNumber) => (
    {
      type: PUSH_MOVIES,
      pageNumber
    }),
};
export default movieActions;

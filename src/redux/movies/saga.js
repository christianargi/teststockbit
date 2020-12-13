import { all, takeEvery, fork, takeLatest, call, select, put } from 'redux-saga/effects';
import movieActions from './actions';
import { POST, GET } from '../../api/api';
import axios from 'axios';

import {
  HANDLE_STATE,
  GET_MOVIE_LIST,
  SET_MOVIE_LIST,
  SET_LOADER,
  SET_HAS_MORE,
  GET_MOVIE_DETAIL,
  SET_MOVIE_DETAIL,
  SET_MOVIE_LIST_PART,
  PUSH_MOVIES
} from '../../types/constants'

const movies = state => state.movies

export function* getMovieList(actions) {
  try {
    const moviesState = yield select(movies)
    let response = yield call(GET, "http://www.omdbapi.com/?apikey=faf7e5bb&s=" + moviesState.movieName + "&page=" + actions.pageNo)
    if (response.Search != undefined) {
      if (moviesState.prevMovieList.length == 0) {
        yield put({ type: SET_MOVIE_LIST, payload: response.Search })
      }
      else {
        let listmovies = moviesState.prevMovieList
        response.Search.map(object => {
          listmovies.push(object)
        })
        yield put({ type: SET_MOVIE_LIST, payload: listmovies })
      }
      yield put({ type: SET_LOADER, payload: false })
      if (response.Search.length > 10) {
        yield put({ type: SET_HAS_MORE, payload: false })
      }
      else {
        yield put({ type: SET_HAS_MORE, payload: false })
      }
    }
    else {
      yield put({ type: SET_MOVIE_LIST, payload: [] })
    }
  }
  catch {
    console.log("fail")
  }
}

export function* getMovieDetails(actions) {
  try {
    const moviesState = yield select(movies)
    let data = moviesState.prevMovieList.find(object => object.imdbID === actions.id)
    if (data != undefined) {
      yield put({ type: SET_MOVIE_DETAIL, payload: data })
      localStorage.setItem("movieTitle", JSON.stringify(data.Title));
      localStorage.setItem("movieYear", JSON.stringify(data.Year));
      localStorage.setItem("movieType", JSON.stringify(data.Type));
      localStorage.setItem("movieImage", JSON.stringify(data.Poster));
    }
    else {
      yield put({ type: HANDLE_STATE, value: JSON.parse(localStorage.getItem('movieTitle')), field: 'movieTitle' })
      yield put({ type: HANDLE_STATE, value: JSON.parse(localStorage.getItem('movieYear')), field: 'movieYear' })
      yield put({ type: HANDLE_STATE, value: JSON.parse(localStorage.getItem('movieType')), field: 'movieType' })
      yield put({ type: HANDLE_STATE, value: JSON.parse(localStorage.getItem('movieImage')), field: 'movieImage' })
    }
  }
  catch {
    console.log("fail")
  }
}

export function* pushMovieList(actions) {
  try {

    const moviesState = yield select(movies)
    // if (moviesState.prevMovieList.length == 0) {
    //   yield put(movieActions.getMovies(actions.pageNumber))
    // }
    // else {
    let listMovie = moviesState.prevMovieList.splice(0, 5)
    yield put({ type: SET_MOVIE_LIST_PART, payload: listMovie })

    // }
  }
  catch {
    console.log("fail")
  }
}


export default function* rootSaga() {
  yield all(
    [
      takeLatest(GET_MOVIE_LIST, getMovieList),
      takeLatest(GET_MOVIE_DETAIL, getMovieDetails),
      takeLatest(PUSH_MOVIES, pushMovieList),
    ]
  );
}

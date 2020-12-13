import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { Col, Row, Icon, Input, BackTop, Button } from 'antd';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';
import $ from 'jquery';

import movieActions from '@iso/redux/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Input.style';

import Swal from '../../../components/Swal/MessageBox';
import { useParams } from 'react-router';

const {
  handleState,
  getMovies,
  setLoading,
  setHasMore,
  getDetail,
  pushMovies
} = movieActions;

const {
  success,
} = Swal;

const Movies = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();
  let params = useParams();

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (movies.loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        debugger
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [movies.loading, movies.hasMore])

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, []);


  useEffect(() => {
    if (movies.movieName != "") {
      if (movies.prevMovieList.length == 0) {
        dispatch(getMovies(pageNumber))
      }
      else {
        dispatch(getMovies(pageNumber))
      }
    }
  }, [movies.movieName, pageNumber]);

  useEffect(() => {
    if (movies.movieName == "") {
      dispatch(handleState("prevMovieList", []));
      setPageNumber(1)
    }
  }, [movies.movieName]);
  console.log(pageNumber)
  const rowStyle = {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
  };
  const colStyle = {
    marginBottom: '16px',
  };
  const gutter = 16;
  return (
    <div id="myDiv" style={{ marginLeft: "10px", marginTop: "20px" }}>
      <PageHeader>
        Movies
      </PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <Box
            title={"Search Movies"}
          >
            <ContentHolder style={{ marginTop: "0px" }}>
              <Input
                labelField="Movie Name"
                name="movieName"
                id="movieName"
                onChange={e => (dispatch(handleState("movieName", e.target.value)))}
                placeholder="Search Movie Name"
              />
            </ContentHolder>

            <ContentHolder>
              {
                movies.prevMovieList.length != 0 ?
                  movies.prevMovieList.map((x, idx) => {
                    if (movies.prevMovieList.length === idx + 1) {
                      return (
                        <div ref={lastBookElementRef} key={x.Title}>
                          <Card
                            title={x.Title}
                            extra={
                              <Link to={`/dashboard/DetailMovie/` + x.imdbID} onClick={() => { getDetail() }}>
                                more
                              </Link>
                            }
                            style={{ width: '100%' }}
                          >
                            <div className="custom-image">
                              <img
                                alt={"img" + x.Title}
                                width="100px"
                                src={x.Poster}
                                onClick={() => { success(x.Poster); }}
                              />
                            </div>

                          </Card>
                        </div>
                      )
                    }
                    else {
                      return (
                        <div key={x.Title} >
                          <Card
                            title={x.Title}
                            extra={
                              <Link to={`/dashboard/DetailMovie/` + x.imdbID} onClick={() => { getDetail() }}>
                                more
                              </Link>
                            }
                            style={{ width: '100%' }}
                          >
                            <div className="custom-image">
                              <img
                                alt={"img" + x.Title}
                                width="100px"
                                src={x.Poster}
                                onClick={() => { success(x.Poster); }}
                              />
                            </div>
                          </Card>
                        </div>
                      )
                    }
                  })
                  :
                  null
              }
            </ContentHolder>
          </Box>
        </Col>
      </Row >
    </div >
  );
}

export default Movies;

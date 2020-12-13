import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { Col, Row, Icon, Input, BackTop, Button, Image } from 'antd';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { useParams } from 'react-router';

import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';

import movieActions from '@iso/redux/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Input.style';

const {
  handleState,
  getDetail,
} = movieActions;


const Movies = () => {
  // const [pageNumber, setPageNumber] = useState(1);
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();
  let params = useParams();
  console.log(params)

  useEffect(() => {
    debugger
    dispatch(getDetail(params.id));
  }, []);

  const rowStyle = {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    marginTop: '-15px'
  };
  const colStyle = {
    marginBottom: '16px',
  };

  const gutter = 16;
  return (
    <div id="myDiv" style={{ marginLeft: "10px", marginTop: "20px" }}>
      <PageHeader>
        Movie Detail
      </PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <Box >
            <ContentHolder style={{ marginTop: "0px" }}>
              <Col md={7} sm={24} xs={24} style={colStyle}>
                <img
                  src={movies.movieImage}
                  width="100%"
                />
              </Col>
              <Col md={17} sm={24} xs={24} style={colStyle}>
                <Col md={5} sm={5} xs={5} style={colStyle}>
                  <h4>Title :</h4>
                </Col>
                <Col md={19} sm={19} xs={19} style={colStyle}>
                  <h4>{movies.movieTitle}</h4>
                </Col>
                <Col md={5} sm={5} xs={5} style={colStyle}>
                  <h4>Type :</h4>
                </Col>
                <Col md={19} sm={19} xs={19} style={colStyle}>
                  <h4>{movies.movieType}</h4>
                </Col>
                <Col md={5} sm={5} xs={5} style={colStyle}>
                  <h4>Year :</h4>
                </Col>
                <Col md={19} sm={19} xs={19} style={colStyle}>
                  <h4>{movies.movieYear}</h4>
                </Col>
              </Col>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </div >
  );
}

export default Movies;

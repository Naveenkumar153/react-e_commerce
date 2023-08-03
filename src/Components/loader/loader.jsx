import React from 'react'
import './loader';
import { styled } from '@material-ui/core';
import Spinner from './spinner/spinner';

const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
    width: '100%'
});

function loader() {
  return (
    <LoaderWrapper>
        <Spinner/>
    </LoaderWrapper>
  )
}

export default loader;

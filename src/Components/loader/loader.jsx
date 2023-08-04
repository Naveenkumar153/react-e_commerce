import React from 'react'
import './loader';
import { styled } from '@material-ui/core';
import Spinner from './spinner/spinner';

const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 100,
    width: '100%',
    backgroundColor:'#0000'
});

function loader() {
  return (
    <LoaderWrapper>
        <Spinner/>
    </LoaderWrapper>
  )
}

export default loader;

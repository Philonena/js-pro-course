import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';
 
export default function Loading() {
  return (
    <ReactLoading id="load" type="spinningBubbles" color="rgba(0,0,0,.125)"  height={200} width={200} />
  )
}

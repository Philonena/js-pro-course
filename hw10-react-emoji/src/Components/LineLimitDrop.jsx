import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function LinelimitDrop({changeLineLimit}) {
  const lineLimit = [5, 10, 15, 50];  

  const chooseLineLimit = (event) => {
    changeLineLimit(event.value)
  }
  return (
        <Dropdown options={lineLimit} onChange={chooseLineLimit} value="15" placeholder="Select" />
  )
}



import React from 'react';
import LinelimitDrop from './LineLimitDrop';
import './Form.css';

export default function Form({inputValue, changeInput, changeLineLimit}) {
  return (
      <form>
        <input type="text" placeholder="enter query" value={inputValue} onChange={changeInput} />
        <LinelimitDrop changeLineLimit={changeLineLimit} />
      </form>
  )
}

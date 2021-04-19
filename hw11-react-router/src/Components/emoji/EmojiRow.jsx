import React from 'react';
import './EmojiRow.css';
import ListGroup from 'react-bootstrap/ListGroup';

export default function EmojiRow(props) {
  return (
    <ListGroup.Item action >
      <img src={`//cdn.jsdelivr.net/emojione/assets/png/${props.symbol.codePointAt(0).toString(16)}.png`} alt="" /> {props.title}
    </ListGroup.Item>
  )
}

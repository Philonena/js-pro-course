import React from 'react';
import './EmojiRow.css'

export default function EmojiRow(props) {
  return (
    <li>
      <img src={`//cdn.jsdelivr.net/emojione/assets/png/${props.symbol.codePointAt(0).toString(16)}.png`} alt=""/> {props.title}
    </li>
  )
}

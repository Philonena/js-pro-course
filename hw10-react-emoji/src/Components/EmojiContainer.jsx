import React from 'react';
import EmojiRow from './EmojiRow';
import './EmojiContainer.css';

export default function EmojiContainer({emojiList}) {
  const content = (emojiList.length > 0) ? 
    emojiList.map((emoji, index) => <EmojiRow key={index} title={emoji.title} symbol={emoji.symbol} />) : <p>Not found </p>;
  
    return (
    <ul>
      {content}
    </ul>
  )
}

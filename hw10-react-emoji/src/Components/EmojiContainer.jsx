import React from 'react';
import EmojiRow from './EmojiRow';
import './EmojiContainer.css';

export default function EmojiContainer({emojiList}) {
  const content = emojiList.map((emoji, index) => <EmojiRow key={index} title={emoji.title} symbol={emoji.symbol} />);
  return (
    <ul>
      {content}
    </ul>
  )
}

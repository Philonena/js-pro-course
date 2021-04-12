import React, { useState } from 'react';
import EmojiContainer from './EmojiContainer';
import LinelimitDrop from './LineLimitDrop';
import './Form.css';

export default function Form() {
  const [inputValue, setInputValue] = useState('');
  const [emojiList, setEmojiList] = useState([]);
  const [selectLineLimit, setSelectLineLimit] = useState(15);

  const changeInput = (event) => {
    setInputValue(event.target.value);
    searchEmoji(event.target.value, selectLineLimit);
  }
  
  const changeLineLimit = (lineLimit) => {
    setSelectLineLimit(lineLimit);
    searchEmoji(inputValue,lineLimit);
  }

  const searchEmoji = async (searchQuery, lineLimit) => {
    const resp = await fetch('../src/emojiList.json');
    const data = await resp.json();
    setEmojiList(data.filter(emoji => emoji.title.includes(searchQuery) || emoji.keywords.includes(searchQuery)).slice(0, lineLimit));    
  }

  return (
    <>
      <form>
        <input type="text" placeholder="enter query" value={inputValue} onChange={changeInput} />
        <LinelimitDrop changeLineLimit={changeLineLimit} />
      </form>
      <EmojiContainer emojiList={emojiList} />
    </>
  )
}

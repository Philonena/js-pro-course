import React, { useEffect, useState } from 'react';
import EmojiContainer from './EmojiContainer';
import Form from './Form';

export default function Emoji() {
  const [inputValue, setInputValue] = useState('');
  const [emojiData, setEmojiData] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const [selectLineLimit, setSelectLineLimit] = useState(15);

  useEffect(() => {
    fetch('../src/Components/emoji/emojiList.json')
      .then(data => data.json())
      .then(res => {
        setEmojiData(res); 
        setEmojiList(res.slice(0, 15))})
      .catch(error => console.error(error));
  }, []);

  const changeInput = (event) => {
    setInputValue(event.target.value);
    searchEmoji(event.target.value, selectLineLimit);
  }
  
  const changeLineLimit = (lineLimit) => {
    setSelectLineLimit(lineLimit);
    searchEmoji(inputValue,lineLimit);
  }

  const searchEmoji = (searchQuery, lineLimit) => {
    setEmojiList(emojiData.filter(emoji => emoji.title.includes(searchQuery) || emoji.keywords.includes(searchQuery)).slice(0, lineLimit));    
  }

  return (
    <>
      <Form inputValue={inputValue} changeInput={changeInput} changeLineLimit={changeLineLimit} />
      <EmojiContainer emojiList={emojiList} />
    </>
  )
}

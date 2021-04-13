import React, { useState, useEffect } from 'react';
import CreateCardColumns from './Components/CreateCardColumns';
import Loading from './Components/Loading';

export default function App() {
  const [posts, setPosts] = useState([]); 
  const [users, setUsers] = useState([]); 
  const [showCards, setShowCards] = useState(4); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(setPosts)
      .catch(error => console.error(error));
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(setUsers)
      .catch(error => console.error(error));
  }, []);

  const showMoreButton = () => {
    setShowCards(showCards + 4);
  }

  return (
    <>
    {posts.length > 0 && users.length > 0 ? <CreateCardColumns 
      showMoreButton = {showMoreButton} 
      posts = {posts.slice(0, showCards)} 
      users = {users} /> : <Loading />}
    </>
  )
}

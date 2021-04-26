import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import CreateCard from './CreateCard';
import Button from 'react-bootstrap/Button';
import './CreateCardColumns.css';


export default function CreateCardColumns({showMoreButton, posts, users}) {
  return (
    <div className="cards">
      <CardColumns>
        {posts.map(post => <CreateCard key = {post.id} post = {post} user = {users.find(item => item.id == post.userId)}/>)}
      </CardColumns>
      <Button id="btn" variant="secondary" onClick={showMoreButton} >Show more</Button>
    </div>
  )
}

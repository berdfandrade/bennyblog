// src/components/PostList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Post from './blogPost';

const posts = [
  { id: '1', title: 'First Post', content: 'This is the content of the first post.' },
  { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
];

const PostList: React.FC = () => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <Post title={post.title} content={post.content} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;

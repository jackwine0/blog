import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/api';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blogs/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

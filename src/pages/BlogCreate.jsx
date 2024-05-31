import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPost } from '../api/api';

const BlogCreate = () => {
  const history = useHistory();
  const [post, setPost] = useState({ title: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(post);
    history.push('/blogs');
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={post.body} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BlogCreate;

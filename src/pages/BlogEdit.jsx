import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, updatePost } from '../api/api';

const BlogEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({ title: '', body: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id);
      setPost(data);
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, post);
    history.push(`/blogs/${id}`);
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={post.body} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BlogEdit;

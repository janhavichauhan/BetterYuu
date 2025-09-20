import React, { useState } from 'react';
import styles from '../../style/components/BlogComponents/AddBlog.module.scss';

export default function AddBlog() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setBlogContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New blog to be published:', { title: blogTitle, content: blogContent });
    // You would add API call logic here to save the blog
    setBlogTitle('');
    setBlogContent('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Create a New Blog Post ✨</h2>
        <p className={styles.subtitle}>
          Share your thoughts and insights with the community.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={blogTitle}
            onChange={handleTitleChange}
            placeholder="Your blog title"
            className={styles.titleInput}
            required
          />
          <textarea
            value={blogContent}
            onChange={handleContentChange}
            placeholder="Start writing your blog content here..."
            className={styles.textarea}
            rows="15"
            required
          />
          <button type="submit" className={styles.button}>
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}
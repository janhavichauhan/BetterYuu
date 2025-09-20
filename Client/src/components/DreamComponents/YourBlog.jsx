import React, { useState, useEffect } from 'react';
import styles from '../../style/components/DreamComponents/YourBlogs.module.scss';
import { format } from 'date-fns';

// Mock data for user's blogs
const mockUserBlogs = [
  {
    id: 'b1',
    title: '5 Ways to Improve Your Sleep Quality',
    date: new Date('2025-09-18T12:00:00Z'),
    author: 'Better You Team',
    summary: 'A brief guide to help you get a more restful night\'s sleep, from improving your sleep hygiene to a few simple relaxation techniques.',
    image: 'https://images.unsplash.com/photo-1510936279934-2e212470725a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'b2',
    title: 'The Psychology of Lucid Dreaming',
    date: new Date('2025-09-15T09:30:00Z'),
    author: 'Better You Team',
    summary: 'Explore the fascinating world of lucid dreaming and the science behind taking control of your dreams. Learn tips to start your lucid dreaming journey.',
    image: 'https://images.unsplash.com/photo-1549419637-bf7f62e84606?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'b3',
    title: 'Mindfulness for Beginners',
    date: new Date('2025-09-12T15:45:00Z'),
    author: 'Better You Team',
    summary: 'Mindfulness can help reduce stress and improve focus. This article provides a simple, step-by-step introduction to starting your own practice.',
    image: 'https://images.unsplash.com/photo-1499728603265-d069c9b19e2c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function YourBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlogs(mockUserBlogs);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading your blogs...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Content wrapper to place everything on top of the background */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Your Blogs ✒️</h2>
        <p className={styles.subtitle}>
          A list of articles and posts you have created.
        </p>
        
        {blogs.length === 0 ? (
          <div className={styles.noBlogs}>
            <p>You haven't published any blogs yet.</p>
            <a href="/add-blog">Write your first blog now!</a>
          </div>
        ) : (
          <div className={styles.blogList}>
            {blogs.map(blog => (
              <div key={blog.id} className={styles.blogCard}>
                <div className={styles.blogImage} style={{ backgroundImage: `url(${blog.image})` }}></div>
                <div className={styles.blogContent}>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogMeta}>
                    by {blog.author} on {format(blog.date, 'MMMM d, yyyy')}
                  </p>
                  <p className={styles.blogSummary}>{blog.summary}</p>
                  <a href={`/blog/${blog.id}`} className={styles.readMore}>Read More →</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
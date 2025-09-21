import React from 'react';

// --- FAKE DATA ---
const featuredPost = {
  title: 'Technology',
  excerpt: 'Suspendisse viverra mauris Sincidunt, ultrices interdum sem. Morbi et risus nec Sincidunt, eu tincidunt nun accumsan nec io laoreet. Curabitur feugiat posuere odio.',
  imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
};

const blogPosts = [
  {
    id: 1,
    category: 'Music, Travel',
    date: 'Nov 19, 2024',
    title: 'Aenean mattis tortor ac sapien congue molestie',
    excerpt: 'Quisque et iaculis dui, in accumsan leo laoreet. Curabitur feugiat posuere odio.',
    imageUrl: 'https://images.unsplash.com/photo-1525923838299-2312b6952825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 2,
    category: 'Food, Art',
    date: 'Nov 18, 2024',
    title: 'Etiam commodo eros non erat tristique congue',
    excerpt: 'Quisque et iaculis dui, in accumsan leo laoreet. Curabitur feugiat posuere odio.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 3,
    category: 'Music, Travel',
    date: 'Nov 17, 2024',
    title: 'Curabitur pretium lectus nec fermentum fermen',
    excerpt: 'Quisque et iaculis dui, in accumsan leo laoreet. Curabitur feugiat posuere odio.',
    imageUrl: 'https://images.unsplash.com/photo-1505904267569-f02b7b4614da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 4,
    category: 'Music, Travel',
    date: 'Nov 16, 2024',
    title: 'Suspendisse viverra massa eget nibh ultricies mollis',
    excerpt: 'Quisque et iaculis dui, in accumsan leo laoreet. Curabitur feugiat posuere odio.',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 5,
    category: 'Culture, Art',
    date: 'Nov 15, 2024',
    title: 'Praesentium ipsum magna neu ultrices vitae rutrum',
    excerpt: 'Quisque et iaculis dui, in accumsan leo laoreet. Curabitur feugiat posuere odio.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80'
  },
  {
    id: 6,
    category: 'Music, Travel',
    date: 'Nov 14, 2024',
    title: 'Aenean mattis tortor ac sapien congue molestie',
    excerpt: 'Quisque et iaculis dui, in accumsan leo laoreet. Curabitur feugiat posuere odio.',
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
  },
];

const categories = ['Culture', 'Creativity', 'Technology', 'Humor', 'Music'];
const topPosts = [
  { title: 'Aenean mattis tortor ac sapien congue molestie', category: 'Food, Travel', date: 'Nov 17, 2024' },
  { title: 'Suspendisse ut ipsum primis in orci faucibus luctus.', category: 'Music, Humor', date: 'Nov 15, 2024' },
  { title: 'Donec sit amet odio in posuere vitae bibendum vitae lorem.', category: 'Culture', date: 'Nov 14, 2024' },
  { title: 'Etiam eu odio id sapien posuere vitae bibendum vitae lorem.', category: 'Art', date: 'Nov 12, 2024' },
  { title: 'Morbi eget leo a tellus gravida sagittis nec nec felis.', category: 'Food, Travel', date: 'Nov 11, 2024' },
];

const instagramImages = [
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400',
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400',
  'https://images.unsplash.com/photo-1504270997636-07ddfbd4d3af?w=400',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400',
];

// --- STYLES ---
const GlobalStyles = () => (
    <style>{`
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #FFFFFF;
            margin: 0;
            color: #333;
        }
        .blog-container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .blog-container {
                margin: 1rem auto;
                padding: 0 0.75rem;
            }
            .main-header {
                margin-bottom: 1.5rem;
            }
            .main-header .logo {
                font-size: 1.5rem;
            }
            .main-header .tagline {
                font-size: 0.9rem;
            }
            .search-bar {
                flex-direction: column;
                gap: 1rem;
            }
            .search-input {
                width: 100%;
            }
            .filter-buttons {
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            .filter-btn {
                padding: 0.4rem 0.8rem;
                font-size: 0.8rem;
            }
            .blog-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            .blog-card {
                padding: 1rem;
            }
            .blog-card h3 {
                font-size: 1.1rem;
            }
            .blog-card p {
                font-size: 0.9rem;
            }
            .blog-meta {
                flex-direction: column;
                gap: 0.5rem;
                align-items: flex-start;
            }
            .blog-meta span {
                font-size: 0.8rem;
            }
            .blog-actions {
                flex-direction: column;
                gap: 0.5rem;
            }
            .action-btn {
                padding: 0.4rem 0.8rem;
                font-size: 0.8rem;
            }
        }
        
        @media (max-width: 480px) {
            .blog-container {
                margin: 0.5rem auto;
                padding: 0 0.5rem;
            }
            .main-header {
                margin-bottom: 1rem;
            }
            .main-header .logo {
                font-size: 1.25rem;
            }
            .main-header .tagline {
                font-size: 0.8rem;
            }
            .search-bar {
                gap: 0.75rem;
            }
            .search-input {
                padding: 0.6rem 0.8rem;
                font-size: 0.9rem;
            }
            .filter-buttons {
                gap: 0.4rem;
            }
            .filter-btn {
                padding: 0.3rem 0.6rem;
                font-size: 0.75rem;
            }
            .blog-grid {
                gap: 0.75rem;
            }
            .blog-card {
                padding: 0.75rem;
            }
            .blog-card h3 {
                font-size: 1rem;
            }
            .blog-card p {
                font-size: 0.8rem;
            }
            .blog-meta {
                gap: 0.4rem;
            }
            .blog-meta span {
                font-size: 0.75rem;
            }
            .blog-actions {
                gap: 0.4rem;
            }
            .action-btn {
                padding: 0.3rem 0.6rem;
                font-size: 0.75rem;
            }
        }
        .main-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #F0F0F0;
        }
        .main-header .logo {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -1px;
        }
        .featured-post {
            position: relative;
            color: white;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 3rem;
            min-height: 350px;
            display: flex;
            align-items: flex-end;
        }
        .featured-post img {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            z-index: 1;
        }
        .featured-post .overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            z-index: 2;
        }
        .featured-post .content {
            position: relative;
            z-index: 3;
            padding: 2.5rem;
            max-width: 60%;
        }
        .featured-post .content h2 {
            font-size: 2.2rem;
            margin: 0 0 0.5rem 0;
            line-height: 1.2;
        }
        .featured-post .content p {
            margin: 0;
            font-size: 1rem;
            color: rgba(255,255,255,0.9);
        }

        .main-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        @media (min-width: 992px) {
            .main-grid {
                grid-template-columns: 2fr 1fr;
            }
        }
        .posts-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }
        @media (min-width: 768px) {
            .posts-list {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .post-card {
            background-color: #fff;
        }
        .post-card img {
            width: 100%;
            height: auto;
            object-fit: cover;
            aspect-ratio: 16/10;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        .post-card .meta {
            color: #888;
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
        }
        .post-card h3 {
            font-size: 1.3rem;
            margin: 0.5rem 0;
            line-height: 1.4;
        }
        .post-card .excerpt {
            color: #555;
            font-size: 0.95rem;
        }

        .sidebar .widget {
            margin-bottom: 2.5rem;
        }
        .sidebar .widget-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            position: relative;
        }
        .sidebar .widget-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 30px;
            height: 2px;
            background-color: #3B82F6;
        }
        .category-list button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: #f7f7f7;
            border: none;
            text-align: left;
            padding: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .category-list button:hover {
            background-color: #efefef;
        }

        .top-posts-list .post-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            margin-bottom: 1.5rem;
        }
        .top-posts-list .post-rank {
            font-size: 2rem;
            font-weight: 700;
            color: #e0e0e0;
        }
        .top-posts-list .post-details h4 {
            margin: 0;
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.4;
        }
        .top-posts-list .post-details .meta {
            font-size: 0.8rem;
            color: #888;
        }
        
        .instagram-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
        }
        .instagram-grid img {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
            object-fit: cover;
            border-radius: 4px;
        }

        .load-more-container {
            text-align: center;
            grid-column: 1 / -1;
            margin-top: 1rem;
        }
        .load-more-btn {
            background-color: #3B82F6;
            color: white;
            border: none;
            padding: 0.8rem 2.5rem;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .load-more-btn:hover {
            background-color: #2563EB;
        }
    `}</style>
);


// --- Main Component ---
export default function BlogFeed() {
    return (
        <>
            <GlobalStyles />
            <div className="blog-container">
                <header className="main-header">
                    <div className="logo">Better You</div>
                </header>

                <section className="featured-post">
                    <img src={featuredPost.imageUrl} alt={featuredPost.title} />
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>{featuredPost.title}</h2>
                        <p>{featuredPost.excerpt}</p>
                    </div>
                </section>

                <div className="main-grid">
                    <main className="posts-list">
                        {blogPosts.map(post => (
                            <article key={post.id} className="post-card">
                                <img src={post.imageUrl} alt={post.title} />
                                <div className="meta">{post.category} - {post.date}</div>
                                <h3>{post.title}</h3>
                                <p className="excerpt">{post.excerpt}</p>
                            </article>
                        ))}
                         <div className="load-more-container">
                            <button className="load-more-btn">Load More</button>
                        </div>
                    </main>

                    <aside className="sidebar">
                        <div className="widget">
                            <h3 className="widget-title">Categories</h3>
                            <div className="category-list">
                                {categories.map(cat => (
                                    <button key={cat}>
                                        <span>{cat}</span>
                                        <span>&rarr;</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="widget">
                             <h3 className="widget-title">Top Posts</h3>
                             <div className="top-posts-list">
                                {topPosts.map((post, index) => (
                                    <div key={index} className="post-item">
                                        <div className="post-rank">0{index + 1}</div>
                                        <div className="post-details">
                                            <h4>{post.title}</h4>
                                            <div className="meta">{post.category} - {post.date}</div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                         <div className="widget">
                            <h3 className="widget-title">Instagram</h3>
                            <div className="instagram-grid">
                                {instagramImages.map((img, index) => (
                                    <img key={index} src={img} alt={`Instagram post ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}


import React, { useState, useEffect } from 'react';

// --- SVG ICONS ---
const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} className="icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);


// --- STYLES ---
const GlobalStyles = () => (
    <style>{`
        :root {
            --primary-purple: #7C3AED;
            --light-purple: #F5F3FF;
            --text-dark: #1F2937;
            --text-light: #6B7280;
            --bg-color: #F9FAFB;
            --border-color: #E5E7EB;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            color: var(--text-dark);
        }
        .blog-creator-container {
            padding: 2rem;
            max-width: 1200px;
            margin: auto;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .blog-creator-container {
                padding: 1rem;
            }
            .header h1 {
                font-size: 1.75rem;
            }
            .creator-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            .form-section {
                padding: 1.5rem;
            }
            .file-upload-area {
                padding: 1.5rem;
            }
            .file-upload-area .icon {
                width: 36px;
                height: 36px;
            }
            .form-input, .form-textarea {
                padding: 0.6rem 0.8rem;
                font-size: 0.9rem;
            }
            .submit-btn {
                padding: 0.8rem;
                font-size: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .blog-creator-container {
                padding: 0.75rem;
            }
            .header h1 {
                font-size: 1.5rem;
            }
            .header p {
                font-size: 0.9rem;
            }
            .form-section {
                padding: 1rem;
            }
            .file-upload-area {
                padding: 1rem;
            }
            .file-upload-area .icon {
                width: 32px;
                height: 32px;
            }
            .form-input, .form-textarea {
                padding: 0.5rem 0.6rem;
                font-size: 0.85rem;
            }
            .submit-btn {
                padding: 0.7rem;
                font-size: 0.9rem;
            }
            .preview-card {
                margin-top: 1rem;
            }
        }
        .header {
            margin-bottom: 2rem;
        }
        .header h1 {
            font-size: 2.25rem;
            font-weight: 700;
            margin: 0;
        }
        .header p {
            font-size: 1rem;
            color: var(--text-light);
            margin-top: 0.25rem;
        }
        .creator-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        @media (min-width: 1024px) {
            .creator-grid {
                grid-template-columns: 2fr 1fr;
            }
        }
        .form-section {
            background-color: white;
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border-color);
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }
        .file-upload-area {
            border: 2px dashed var(--border-color);
            border-radius: 0.75rem;
            padding: 2rem;
            text-align: center;
            cursor: pointer;
            transition: background-color 0.2s;
            position: relative;
            overflow: hidden;
        }
        .file-upload-area:hover {
            background-color: #F9FAFB;
        }
        .file-upload-area .icon {
            color: var(--primary-purple);
            margin-bottom: 1rem;
        }
        .file-upload-area p {
            margin: 0.25rem 0;
            color: var(--text-light);
        }
        .file-upload-area .browse-btn {
            background-color: var(--text-dark);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            display: inline-block;
            margin-top: 1rem;
            font-weight: 500;
        }
        .image-preview-overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            object-fit: cover;
        }
        input[type="file"] {
            display: none;
        }
        .form-input, .form-textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            font-size: 1rem;
            box-sizing: border-box;
        }
        .form-textarea {
            min-height: 150px;
            resize: vertical;
        }
        .submit-btn {
            width: 100%;
            padding: 1rem;
            background-color: var(--primary-purple);
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .submit-btn:hover {
            background-color: #6D28D9;
        }
        
        /* Preview Section */
        .preview-section h2 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .preview-card {
            background-color: white;
            border-radius: 1rem;
            overflow: hidden;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }
        .preview-card-placeholder {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
            color: var(--text-light);
            text-align: center;
        }
        .preview-image-container {
            height: 200px;
            background-color: var(--light-purple);
        }
        .preview-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .preview-content {
            padding: 1.5rem;
        }
        .preview-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 0 1rem 0;
        }
        .preview-description {
            color: var(--text-light);
            white-space: pre-wrap; /* preserves line breaks */
        }
    `}</style>
);


// --- Main Component ---
export default function BlogCreator() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null); // Will store base64 URL
    const [submittedPost, setSubmittedPost] = useState(null);

    useEffect(() => {
        // This could be used to load existing blogs, but for now we focus on creation
        const storedBlogs = localStorage.getItem('blogPosts');
        if (storedBlogs) {
            // console.log(JSON.parse(storedBlogs));
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !image) {
            alert('Please fill all fields and upload an image.');
            return;
        }

        const newPost = {
            id: Date.now(),
            title,
            description,
            image,
            createdAt: new Date().toISOString()
        };

        // Save to local storage
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        localStorage.setItem('blogPosts', JSON.stringify([...existingPosts, newPost]));

        // Set for preview
        setSubmittedPost(newPost);

        // Reset form
        setTitle('');
        setDescription('');
        setImage(null);
        // We can clear the file input visually, but programmatically it's tricky.
        // A common approach is to reset the form via its key.
        document.getElementById('file-upload').value = null;
    };

    return (
        <>
            <GlobalStyles />
            <div className="blog-creator-container">
                <header className="header">
                    <h1>Create Blog Post</h1>
                    <p>Fill in the details below to create and preview your new blog post.</p>
                </header>
                <div className="creator-grid">
                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="form-section">
                        <div className="form-group">
                            <label>Upload File</label>
                            <input
                                type="file"
                                id="file-upload"
                                accept="image/png, image/jpeg, image/gif"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="file-upload" className="file-upload-area">
                                {image ? (
                                    <img src={image} alt="Preview" className="image-preview-overlay" />
                                ) : (
                                    <>
                                        <UploadIcon />
                                        <p>PNG, JPG, GIF accepted.</p>
                                        <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Max 120 MB</p>
                                        <div className="browse-btn">Browse File</div>
                                    </>
                                )}
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                className="form-input"
                                placeholder="e.g. 'My Trip to the Mountains'"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                className="form-textarea"
                                placeholder="Tell your story..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="submit-btn">Create & Preview</button>
                    </form>
                    
                    {/* Preview Section */}
                    <aside className="preview-section">
                        <h2>Preview File</h2>
                        <div className="preview-card">
                            {submittedPost ? (
                                <>
                                    <div className="preview-image-container">
                                        <img src={submittedPost.image} alt={submittedPost.title} className="preview-image" />
                                    </div>
                                    <div className="preview-content">
                                        <h3 className="preview-title">{submittedPost.title}</h3>
                                        <p className="preview-description">{submittedPost.description}</p>
                                    </div>
                                </>
                            ) : (
                                <div className="preview-card-placeholder">
                                    <p>Your submitted blog post preview will appear here.</p>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}


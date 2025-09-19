import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/pages/GlobalForums.scss";

const forumCategories = [
  { id: "productivity", name: "Productivity" },
  { id: "mental-health", name: "Mental Health" },
  { id: "dream-interpretation", name: "Dream Interpretation" },
];

const sampleThreads = {
  productivity: [
    { id: 1, title: "How do you stay focused?", body: "Share your best tips for staying in deep work.", author: "Anonymous", timestamp: "2h ago", votes: 124, comments: 18, tag: "Tips" },
    { id: 2, title: "Best morning routines?", body: "Looking for simple routines that actually stick.", author: "Anonymous", timestamp: "5h ago", votes: 87, comments: 15, tag: "Routine" },
    { id: 5, title: "Pomodoro vs. Flow?", body: "Do timers break flow or help it?", author: "Anonymous", timestamp: "1d ago", votes: 52, comments: 21, tag: "Discussion" },
    { id: 6, title: "Desk setups that reduce distraction", body: "Photo-free ideas welcome.", author: "Anonymous", timestamp: "2d ago", votes: 39, comments: 9, tag: "Setup" },
  ],
  "mental-health": [
    { id: 3, title: "Dealing with anxiety", body: "What helps you calm down fast (phone-free)?", author: "Anonymous", timestamp: "1h ago", votes: 231, comments: 112, tag: "Support" },
    { id: 7, title: "Sleep hygiene checklist", body: "What actually worked for you?", author: "Anonymous", timestamp: "8h ago", votes: 64, comments: 22, tag: "Sleep" },
    { id: 8, title: "Social media breaks", body: "How long until cravings drop?", author: "Anonymous", timestamp: "12h ago", votes: 41, comments: 19, tag: "Digital Detox" },
  ],
  "dream-interpretation": [
    { id: 4, title: "Recurring symbols in dreams", body: "Keep seeing doors and oceans—any thoughts?", author: "Anonymous", timestamp: "3h ago", votes: 12, comments: 3, tag: "Dreams" },
    { id: 9, title: "Flying but can't land", body: "Feels like goals I can't finish.", author: "Anonymous", timestamp: "1d ago", votes: 18, comments: 7, tag: "Dreams" },
    { id: 10, title: "Teeth falling out", body: "Classic stress dream—what's your take?", author: "Anonymous", timestamp: "2d ago", votes: 27, comments: 11, tag: "Dreams" },
  ],
};

function GlobalForums() {
  const [selectedCategory, setSelectedCategory] = useState(forumCategories[0].id);
  const [sort, setSort] = useState("hot"); // hot | new | top
  const [query, setQuery] = useState("");
  const [isComposerOpen, setComposerOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [viewMode, setViewMode] = useState('card'); // card | compact
  const [visibleCount, setVisibleCount] = useState(8);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [replyForId, setReplyForId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // storage helpers
  const STORAGE_KEY = 'forums_posts_v1';
  const SAVED_KEY = 'forums_saved_v1';
  const savePosts = (posts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  };
  const loadPosts = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  // seed sample data once
  useEffect(() => {
    const seeded = localStorage.getItem('forums_seeded_v1');
    if (!seeded) {
      const seededPosts = Object.entries(sampleThreads).flatMap(([category, items]) =>
        items.map(it => ({ ...it, category }))
      );
      savePosts(seededPosts);
      localStorage.setItem('forums_seeded_v1', '1');
    }
    setLocalPosts(loadPosts());
    try {
      const rawSaved = localStorage.getItem(SAVED_KEY);
      setSavedIds(rawSaved ? JSON.parse(rawSaved) : []);
    } catch {
      setSavedIds([]);
    }
  }, []);

  // derived list by category + filters
  const combined = useMemo(() => {
    let list = localPosts.filter(p => p.category === selectedCategory);
    if (showSavedOnly) list = list.filter(p => savedIds.includes(p.id));
    const filtered = query
      ? list.filter(p => (p.title + " " + (p.body||"")).toLowerCase().includes(query.toLowerCase()))
      : list;
    if (sort === "new") return filtered; // assume array order ~ newest first due to unshift
    if (sort === "top") return [...filtered].sort((a,b) => (b.votes||0) - (a.votes||0));
    return [...filtered].sort((a,b) => (b.comments||0) - (a.comments||0));
  }, [localPosts, selectedCategory, sort, query]);
  const paged = useMemo(() => combined.slice(0, visibleCount), [combined, visibleCount]);

  const totalVisible = combined.length;

  const handleShare = async (id) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}?thread=${id}`;
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (e) {
      // noop
    }
  };

  const handleCreatePost = (title, body, tag = 'New', image = '') => {
    const post = {
      id: Date.now(),
      title,
      body,
      author: 'You (Anonymous)',
      timestamp: 'just now',
      votes: 0,
      comments: 0,
      tag,
      image: image || undefined,
      category: selectedCategory,
    };
    setLocalPosts(prev => {
      const next = [post, ...prev];
      savePosts(next);
      return next;
    });
  };

  const handleVote = (id, delta) => {
    setLocalPosts(prev => {
      const next = prev.map(p => p.id === id ? { ...p, votes: Math.max(0, (p.votes||0) + delta) } : p);
      savePosts(next);
      return next;
    });
  };

  const handleIncrementComments = (id) => {
    setLocalPosts(prev => {
      const next = prev.map(p => p.id === id ? { ...p, comments: (p.comments||0) + 1 } : p);
      savePosts(next);
      return next;
    });
  };

  const handleReplySubmit = (e, id) => {
    e.preventDefault();
    const text = e.currentTarget.reply?.value.trim();
    if (!text) return;
    handleIncrementComments(id);
    setReplyForId(null);
    e.currentTarget.reset();
  };

  const toggleSave = (id) => {
    setSavedIds(prev => {
      const has = prev.includes(id);
      const next = has ? prev.filter(x => x !== id) : [id, ...prev];
      localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <div>
      <Navbar />
    <div className="global-forums">
      <header className="gf-head">
        <div className="title">
          <h1>Global Forums</h1>
          <p className="sub">Anonymous, supportive discussions to grow together.</p>
        </div>
        <div className="stats">
          <span className="pill">{totalVisible} threads</span>
        </div>
      </header>
        <div className="toolbar sticky">
      <div className="forum-categories">
        {forumCategories.map((cat) => (
          <button
            key={cat.id}
            className={selectedCategory === cat.id ? "active" : ""}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
          <div className="filters">
            <div className="tabs">
              <button className={sort === 'hot' ? 'active' : ''} onClick={() => setSort('hot')}>Hot</button>
              <button className={sort === 'new' ? 'active' : ''} onClick={() => setSort('new')}>New</button>
              <button className={sort === 'top' ? 'active' : ''} onClick={() => setSort('top')}>Top</button>
            </div>
            <div className="view-toggle">
              <button className={viewMode==='card' ? 'active' : ''} onClick={() => setViewMode('card')}>Card</button>
              <button className={viewMode==='compact' ? 'active' : ''} onClick={() => setViewMode('compact')}>Compact</button>
            </div>
            <label className="saved-toggle">
              <input type="checkbox" checked={showSavedOnly} onChange={(e) => setShowSavedOnly(e.target.checked)} /> Saved
            </label>
            <input
              className="search"
              type="search"
              placeholder="Search threads"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="compose" onClick={() => setComposerOpen(true)}>Create Post</button>
          </div>
        </div>

        <div className="forums-layout">
          <main className="feed">
            {combined.length === 0 ? (
              <div className="empty">
                <p>No threads yet in this category.</p>
                <button className="compose" onClick={() => setComposerOpen(true)}>Be the first to post</button>
              </div>
            ) : (
              paged.map((thread) => (
                <article key={thread.id} className={`thread-card ${viewMode==='compact' ? 'compact' : ''}`}>
                  <div className="vote">
                    <button aria-label="upvote" onClick={() => handleVote(thread.id, +1)}>▲</button>
                    <div className="count">{thread.votes || 0}</div>
                    <button aria-label="downvote" onClick={() => handleVote(thread.id, -1)}>▼</button>
                  </div>
                  <div className="content">
                    <div className="title-row">
                      <span className="avatar" aria-hidden>{(thread.tag || thread.category || 'A').toString().charAt(0)}</span>
                      {thread.tag && <span className="tag">{thread.tag}</span>}
                      <h3>{thread.title}</h3>
                    </div>
                    {viewMode==='card' && thread.body && <p className="body">{thread.body}</p>}
                    {viewMode==='card' && thread.image && (
                      <div className="media"><img src={thread.image} alt="attachment" /></div>
                    )}
                    <div className="meta">
                      <span className="by">{thread.author}</span>
                      <span className="dot">•</span>
                      <span className="time">{thread.timestamp}</span>
                      <span className="dot">•</span>
                      <span className="comments">{thread.comments || 0} comments</span>
                    </div>
                    <div className="actions">
                      <button onClick={() => setReplyForId(replyForId === thread.id ? null : thread.id)}>{replyForId === thread.id ? 'Cancel' : 'Comment'}</button>
                      <button onClick={() => handleShare(thread.id)}>{copiedId === thread.id ? 'Copied!' : 'Share'}</button>
                      <button onClick={() => toggleSave(thread.id)}>{savedIds.includes(thread.id) ? 'Saved' : 'Save'}</button>
                    </div>
                    {replyForId === thread.id && (
                      <form className="quick-reply" onSubmit={(e) => handleReplySubmit(e, thread.id)}>
                        <textarea name="reply" placeholder="Write a reply..." rows={3} />
                        <div className="qr-actions">
                          <button type="submit">Post Reply</button>
                        </div>
                      </form>
                    )}
                  </div>
                </article>
              ))
            )}
            {visibleCount < combined.length && (
              <div className="load-more">
                <button onClick={() => setVisibleCount(c => c + 8)}>Load more</button>
              </div>
            )}
          </main>
          <aside className="sidebar">
            <div className="card about">
              <h4>About This Forum</h4>
              <p>Anonymous, supportive, and focused on real growth.</p>
            </div>
            <div className="card rules">
              <h4>House Rules</h4>
              <ul>
                <li>Be kind. No judgment.</li>
                <li>No personal data.</li>
                <li>Stay on topic.</li>
              </ul>
            </div>
            <div className="card trending">
              <h4>Trending Tags</h4>
              <div className="tags">
                {['Tips','Routine','Support','Dreams','Focus'].map(t => (
                  <span className="pill" key={t}>{t}</span>
                ))}
              </div>
                </div>
            <div className="card communities">
              <h4>Top Communities</h4>
              <ul className="communities-list">
                {[
                  { name: 'r/Productivity', members: '120k' },
                  { name: 'r/AnxietySupport', members: '85k' },
                  { name: 'r/Dreams', members: '62k' },
                ].map(c => (
                  <li key={c.name}>
                    <span className="c-name">{c.name}</span>
                    <span className="c-members">{c.members}</span>
                    <button className="join">Join</button>
              </li>
            ))}
          </ul>
            </div>
          </aside>
      </div>

      <div className="new-thread">
        <h2>Start a New Thread</h2>
          <form className="styled-form" onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const title = form.title.value.trim();
            const body = form.body.value.trim();
            const tag = form.tag.value.trim() || 'New';
            const image = form.image.value.trim();
            if (!title) return;
            handleCreatePost(title, body, tag, image);
            form.reset();
          }}>
            <label>Title</label>
            <input className="title-input" name="title" type="text" placeholder="What do you want to share?" required />
            <div className="format-bar">
              <button type="button">Bold</button>
              <button type="button">Italic</button>
              <button type="button">Link</button>
            </div>
            <label>Text</label>
            <textarea className="body-input" name="body" placeholder="Write your post..." rows="5" />
            <div className="row">
              <div className="col">
                <label>Tag</label>
                <input name="tag" type="text" placeholder="e.g. Tips, Support" />
              </div>
              <div className="col">
                <label>Image URL (optional)</label>
                <input name="image" type="url" placeholder="https://..." />
              </div>
            </div>
            <div className="helper">Posting as Anonymous in <span className="pill">{forumCategories.find(c=>c.id===selectedCategory)?.name}</span></div>
          <button type="submit">Post Anonymously</button>
        </form>
        </div>
      </div>

      {isComposerOpen && (
        <div className="composer" role="dialog" aria-modal="true">
          <div className="box">
            <div className="head">
              <h3>Create Post</h3>
              <button className="close" onClick={() => setComposerOpen(false)}>✕</button>
            </div>
            <form className="styled-form" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const title = form.title.value.trim();
              const body = form.body.value.trim();
              const tag = form.tag.value.trim() || 'New';
              const image = form.image.value.trim();
              if (!title) return;
              handleCreatePost(title, body, tag, image);
              setComposerOpen(false);
            }}>
              <label>Title</label>
              <input className="title-input" name="title" placeholder="What do you want to share?" required />
              <div className="format-bar">
                <button type="button">Bold</button>
                <button type="button">Italic</button>
                <button type="button">Link</button>
              </div>
              <label>Text</label>
              <textarea className="body-input" name="body" placeholder="Write your post..." rows="6" />
              <div className="row">
                <div className="col">
                  <label>Tag</label>
                  <input name="tag" placeholder="e.g. Tips, Support" />
                </div>
                <div className="col">
                  <label>Image URL (optional)</label>
                  <input name="image" type="url" placeholder="https://..." />
                </div>
              </div>
              <div className="helper">Posting as Anonymous in <span className="pill">{forumCategories.find(c=>c.id===selectedCategory)?.name}</span></div>
              <div className="actions">
                <button type="button" onClick={() => setComposerOpen(false)}>Cancel</button>
                <button type="submit">Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default GlobalForums;

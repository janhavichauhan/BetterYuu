import React, { useState } from "react";

const forumCategories = [
  { id: "productivity", name: "Productivity" },
  { id: "mental-health", name: "Mental Health" },
  { id: "dream-interpretation", name: "Dream Interpretation" },
];

const sampleThreads = {
  productivity: [
    { id: 1, title: "How do you stay focused?", author: "Anonymous", timestamp: "2h ago" },
    { id: 2, title: "Best morning routines?", author: "Anonymous", timestamp: "5h ago" },
  ],
  "mental-health": [
    { id: 3, title: "Dealing with anxiety", author: "Anonymous", timestamp: "1h ago" },
  ],
  "dream-interpretation": [
    { id: 4, title: "Recurring symbols in dreams", author: "Anonymous", timestamp: "3h ago" },
  ],
};

function GlobalForums() {
  const [selectedCategory, setSelectedCategory] = useState(forumCategories[0].id);
  const threads = sampleThreads[selectedCategory] || [];

  return (
    <div className="global-forums">
      <h1>Global Forums</h1>
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
      <div className="forum-threads">
        {threads.length === 0 ? (
          <p>No threads yet. Start the conversation!</p>
        ) : (
          <ul>
            {threads.map((thread) => (
              <li key={thread.id} className="thread-item">
                <h3>{thread.title}</h3>
                <div className="thread-meta">
                  <span>{thread.author}</span> | <span>{thread.timestamp}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="new-thread">
        <h2>Start a New Thread</h2>
        <form>
          <input type="text" placeholder="Thread title" required />
          <textarea placeholder="Your message" required />
          <button type="submit">Post Anonymously</button>
        </form>
      </div>
    </div>
  );
}

export default GlobalForums;

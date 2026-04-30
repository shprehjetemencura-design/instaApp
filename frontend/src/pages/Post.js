import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

function Post({ user, setUser }) {
  const navigate = useNavigate();
  const [likeAnimations, setLikeAnimations] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [likes, setLikes] = useState({
    1: 2458,
    2: 5892,
    3: 3456
  });
  const [liked, setLiked] = useState({});

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleLike = (postId) => {
    setLikeAnimations({
      ...likeAnimations,
      [postId]: true
    });
    
    if (!liked[postId]) {
      setLikes({
        ...likes,
        [postId]: likes[postId] + 1
      });
      setLiked({
        ...liked,
        [postId]: true
      });
    }
    
    setTimeout(() => {
      setLikeAnimations({
        ...likeAnimations,
        [postId]: false
      });
    }, 600);
  };

  const nextImage = (postId, totalImages) => {
    const current = currentImageIndex[postId] || 0;
    setCurrentImageIndex({
      ...currentImageIndex,
      [postId]: (current + 1) % totalImages
    });
  };

  const prevImage = (postId, totalImages) => {
    const current = currentImageIndex[postId] || 0;
    setCurrentImageIndex({
      ...currentImageIndex,
      [postId]: current === 0 ? totalImages - 1 : current - 1
    });
  };

  // Sample posts with multiple images
  const posts = [
    {
      id: 1,
      author: user.username,
      avatar: user.profilePicture,
      images: [
        'https://images.unsplash.com/photo-1682505396385-53b3b4a23225?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497206365907-3c1c08a8c869?w=600&h=600&fit=crop',
      ],
      caption: "She's thunderstorms⚡️",
      likes: likes[1] || 2458,
      timestamp: 'June 30, 2023',
      comments: [
        { author: 'john_doe', text: 'Amazing! 🔥' },
        { author: 'jane_smith', text: 'Love this! 💕' }
      ]
    },
    {
      id: 2,
      author: user.username,
      avatar: user.profilePicture,
      images: [
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop',
      ],
      caption: '🌟 Living my best life',
      likes: likes[2] || 5892,
      timestamp: '2 weeks ago',
      comments: [
        { author: 'travel_vibes', text: 'Where is this?' },
        { author: 'nature_lover', text: 'Stunning! 🌈' }
      ]
    },
    {
      id: 3,
      author: user.username,
      avatar: user.profilePicture,
      images: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop',
      ],
      caption: '✨ Sunset vibes only',
      likes: likes[3] || 3456,
      timestamp: '1 month ago',
      comments: [
        { author: 'sunset_chaser', text: 'Perfect timing!' },
      ]
    }
  ];

  return (
    <div className="post-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <h1 className="header-logo">Instagram</h1>
          <div className="header-right">
            <span className="user-welcome">{user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Log out</button>
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="post-feed">
        <div className="feed-container">
          {posts.map((post) => {
            const currentImg = currentImageIndex[post.id] || 0;
            const totalImages = post.images.length;

            return (
              <div key={post.id} className="post">
                {/* Post Header */}
                <div className="post-header">
                  <div className="post-user-info">
                    <img src={post.avatar} alt={post.author} className="post-avatar" />
                    <div className="post-user-details">
                      <strong className="post-username">{post.author}</strong>
                      <span className="post-location">Followed by Instagram</span>
                    </div>
                  </div>
                  <button className="post-menu">⋯</button>
                </div>

                {/* Post Image Carousel */}
                <div className="post-image-container">
                  <img 
                    src={post.images[currentImg]} 
                    alt={`post ${currentImg + 1}`}
                    className="post-image" 
                  />
                  
                  {likeAnimations[post.id] && (
                    <div className="like-animation">❤️</div>
                  )}

                  {/* Carousel Navigation */}
                  {totalImages > 1 && (
                    <>
                      <button 
                        className="carousel-nav prev"
                        onClick={() => prevImage(post.id, totalImages)}
                      >
                        ‹
                      </button>
                      <button 
                        className="carousel-nav next"
                        onClick={() => nextImage(post.id, totalImages)}
                      >
                        ›
                      </button>
                      <div className="carousel-indicator">
                        {currentImg + 1} / {totalImages}
                      </div>
                    </>
                  )}
                </div>

                {/* Post Actions */}
                <div className="post-actions">
                  <div className="post-icons">
                    <button
                      className={`icon-btn like-btn ${liked[post.id] ? 'liked' : ''}`}
                      onClick={() => handleLike(post.id)}
                    >
                      {liked[post.id] ? '❤️' : '🤍'}
                    </button>
                    <button className="icon-btn comment-btn">💬</button>
                    <button className="icon-btn share-btn">📤</button>
                  </div>
                  <button className="icon-btn bookmark-btn">🔖</button>
                </div>

                {/* Post Stats */}
                <div className="post-stats">
                  <strong>{post.likes.toLocaleString()} likes</strong>
                </div>

                {/* Post Caption */}
                <div className="post-caption">
                  <strong>{post.author}</strong> {post.caption}
                </div>

                {/* View Comments Link */}
                <div className="view-comments">
                  View all {post.comments.length + 2} comments
                </div>

                {/* Comments Section */}
                <div className="post-comments">
                  {post.comments.map((comment, idx) => (
                    <div key={idx} className="comment">
                      <strong>{comment.author}</strong> {comment.text}
                    </div>
                  ))}
                </div>

                {/* Post Timestamp */}
                <div className="post-timestamp">{post.timestamp}</div>

                {/* Comment Input */}
                <div className="comment-input-container">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input"
                  />
                  <button className="post-button">Post</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-user">
            <img src={user.profilePicture} alt={user.username} className="sidebar-avatar" />
            <div className="sidebar-user-info">
              <strong className="sidebar-username">{user.username}</strong>
              <span className="sidebar-fullname">Instagram User</span>
            </div>
          </div>

          <div className="suggested-section">
            <div className="suggested-header">
              <h3>Suggestions For You</h3>
              <a href="#/">See all</a>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="suggested-user">
                <img
                  src={`https://i.pravatar.cc/32?img=${i}`}
                  alt={`user ${i}`}
                  className="suggested-avatar"
                />
                <div className="suggested-info">
                  <strong>user_{i}</strong>
                  <span>Suggested for you</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            ))}
          </div>

          <div className="sidebar-footer">
            <p>© 2026 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

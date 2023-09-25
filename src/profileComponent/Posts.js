// import React from 'react';
import React, { useEffect, useState } from 'react';
import './Posts.css';

const Posts = () => {
  const postImages = [
   'https://images.pexels.com/photos/896673/pexels-photo-896673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const captions = [
    "Embracing the beauty of simplicity. 🌿",
    "Lost in the world of books and coffee. ☕📚",
    "Making memories one click at a time. 📷✨",
    "Sunsets are proof that no matter what happens, every day can end beautifully. 🌅",
    "Exploring new horizons and chasing dreams. 🌍✨",
    "Weekend mode: Activated! 💃🕺",
    "Life is short, buy the shoes! 👠🛍️",
    "Home is where the heart is. 🏡❤️",
    "Adventures await just around the corner. 🌄",
    "Sundays are for brunch and good company. 🍳🥂",
    "Dancing through life with a smile. 💃😊",
    "In the mood for some wanderlust. 🌎✈️",
    "Coffee and kindness to start the day. ☕💕",
    "Chasing dreams and catching flights. ✈️🌟",
    "Life is short, eat dessert first. 🍰🍦",
    "Weekend vibes: Relax, recharge, repeat. 🌟",
    "Happiness is homemade. 🏡😄",
    "Adventure is calling, and I must go. 🌄🌿",
    "Live life in full bloom. 🌸🌼",
    "Every sunset is an opportunity to reset. 🌅🙌",
  ];

  const posts = postImages.map((imageUrl, index) => ({
    id: index + 1,
    imageUrl: imageUrl,
    caption: captions[index % captions.length],
  }));   const [visiblePosts, setVisiblePosts] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalPosts = posts.length;
      const postsPerScroll = 3; // Adjust the number of posts that appear per scroll

      // Calculate the number of posts to display based on scroll position
      const newVisiblePosts = Math.min(
        Math.ceil((scrollY + windowHeight) / (windowHeight / postsPerScroll)),
        totalPosts
      );

      if (newVisiblePosts > visiblePosts) {
        setTimeout(() => {
          setVisiblePosts(newVisiblePosts);
        }, 5); // 5ms delay before revealing posts after scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visiblePosts, posts]);

  return (
    <div className="posts-container">
      <h1 className="posts-heading">My Posts</h1>
      <div className="posts">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <div
            key={post.id}
            className={`post post-${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="post-image"
            />
            <p className="post-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
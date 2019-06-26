import React from 'react';

const Post = ({
  title,
  description,
  favorite,
  onClick,
}, index) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div key={title}>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{favorite}</span>
      <button onClick={handleClick} type="button">DELETE</button>
    </div>
  );
};


Post.propTypes = {
  title: String,
  description: String,
  favorite: Boolean,
  onClick: Function,
};

Post.defaultProps = {
  title: '',
  description: '',
  favorite: '',
  onClick: () => null,
};

export default Post;

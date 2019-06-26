import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    <Card
      key={title}
      style={{
        maxWidth: '300px',
        margin: '20px auto',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>Delete</Button>
        { favorite && <FavoriteIcon />}
      </CardContent>
    </Card>
  );
};


Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  favorite: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Post.defaultProps = {
  description: '',
  favorite: false,
};

export default Post;

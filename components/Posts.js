import React from 'react';
import useDeleteArray from './hooks/useDeleteArray';
import useQuery from './hooks/useQuery';
import postsQuery from './graphql/postsQuery';
import Loading from './Loading';
import Post from './Post';

const Posts = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(postsQuery);
  const [posts, removePost] = useDeleteArray(data.posts);

  if (error) {
    return null;
  }

  return (
    loading
      ? <Loading />
      : posts
        .map(props => ({
          ...props,
          onClick: removePost,
        }))
        .map(Post)
  );
};

export default Posts;

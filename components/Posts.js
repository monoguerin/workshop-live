import React, { useState, useCallback } from 'react';
import Post from './Post';

const POSTS = [
  {
    title: 'Post 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida porttitor eros nec imperdiet. Proin ligula augue, molestie non cursus et, tincidunt id velit. Aenean porta elementum tellus scelerisque molestie. Donec nec facilisis nibh. Quisque facilisis scelerisque metus, vitae fringilla sem vehicula id. Vestibulum ac turpis et eros vulputate hendrerit sed vitae dui. Donec vehicula dui in fermentum interdum. Proin facilisis condimentum elit at consequat. Fusce enim dui, tincidunt non orci ut, aliquam rutrum sapien.',
    favorite: false,
  },
  {
    title: 'Post 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida porttitor eros nec imperdiet. Proin ligula augue, molestie non cursus et, tincidunt id velit. Aenean porta elementum tellus scelerisque molestie. Donec nec facilisis nibh. Quisque facilisis scelerisque metus, vitae fringilla sem vehicula id. Vestibulum ac turpis et eros vulputate hendrerit sed vitae dui. Donec vehicula dui in fermentum interdum. Proin facilisis condimentum elit at consequat. Fusce enim dui, tincidunt non orci ut, aliquam rutrum sapien.',
    favorite: false,
  },
  {
    title: 'Post 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida porttitor eros nec imperdiet. Proin ligula augue, molestie non cursus et, tincidunt id velit. Aenean porta elementum tellus scelerisque molestie. Donec nec facilisis nibh. Quisque facilisis scelerisque metus, vitae fringilla sem vehicula id. Vestibulum ac turpis et eros vulputate hendrerit sed vitae dui. Donec vehicula dui in fermentum interdum. Proin facilisis condimentum elit at consequat. Fusce enim dui, tincidunt non orci ut, aliquam rutrum sapien.',
    favorite: false,
  },
  {
    title: 'Post 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida porttitor eros nec imperdiet. Proin ligula augue, molestie non cursus et, tincidunt id velit. Aenean porta elementum tellus scelerisque molestie. Donec nec facilisis nibh. Quisque facilisis scelerisque metus, vitae fringilla sem vehicula id. Vestibulum ac turpis et eros vulputate hendrerit sed vitae dui. Donec vehicula dui in fermentum interdum. Proin facilisis condimentum elit at consequat. Fusce enim dui, tincidunt non orci ut, aliquam rutrum sapien.',
    favorite: false,
  },
  {
    title: 'Post 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida porttitor eros nec imperdiet. Proin ligula augue, molestie non cursus et, tincidunt id velit. Aenean porta elementum tellus scelerisque molestie. Donec nec facilisis nibh. Quisque facilisis scelerisque metus, vitae fringilla sem vehicula id. Vestibulum ac turpis et eros vulputate hendrerit sed vitae dui. Donec vehicula dui in fermentum interdum. Proin facilisis condimentum elit at consequat. Fusce enim dui, tincidunt non orci ut, aliquam rutrum sapien.',
    favorite: false,
  },
];

// class Posts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: POSTS,
//     };
//   }

//   removePost(index) {
//     const {
//       posts,
//     } = this.state;

//     const newPosts = [
//       ...posts,
//     ];

//     newPosts.splice(index, 1);

//     this.setState({
//       posts: [
//         ...newPosts,
//       ],
//     });
//   }

//   render() {
//     const {
//       posts,
//     } = this.state;

//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         {posts.map(post => ({
//           ...post,
//           onClick: this.removePost.bind(this),
//         })).map(Post)}
//       </div>
//     );
//   }
// }

const usePosts = (initialPosts) => {
  const [posts, setPosts] = useState(initialPosts);
  const removePost = useCallback((index) => {
    const newPosts = [
      ...posts,
    ];

    newPosts.splice(index, 1);

    setPosts(newPosts);
  }, [posts]);

  return {
    posts,
    removePost,
  };
};

const Posts = () => {
  const {
    posts,
    removePost,
  } = usePosts(POSTS);

  return (
    <div>
      <h1>Hello, world!</h1>
      {posts.map(post => ({
        ...post,
        onClick: removePost,
      })).map(Post)}
    </div>
  );
};

export default Posts;

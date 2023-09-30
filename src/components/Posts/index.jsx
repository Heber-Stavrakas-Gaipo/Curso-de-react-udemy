import P from 'prop-types';
import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.name} body={post.description} id={post.id} cover={post.cover} />
    ))}
  </div>
);

// Posts.defaultProps = {
//   posts: [],
// };

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      name: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ),
};

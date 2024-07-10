import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </ul>
);

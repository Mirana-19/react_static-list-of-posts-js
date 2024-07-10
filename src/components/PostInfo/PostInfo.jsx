import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

function findUser(id) {
  return usersFromServer.find(user => user.id === id);
}

function findComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={findUser(post.userId)} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={findComments(post.id)} />
  </div>
);

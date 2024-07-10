import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}

    {comments.length === 0 && (
      <li>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </li>
    )}
  </ul>
);

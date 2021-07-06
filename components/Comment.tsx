import React, { FC } from "react";
import { Comment as InterfaceComment } from "../interfaces/stories";

import styles from "./Comment.module.scss";

interface Props {
  comment: InterfaceComment;
}

const Comment: FC<Props> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__user}>{comment.user}</div>
      <div
        className={styles.comment__content}
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
      {comment.comments && (
        <div className={styles.comment__nested}>
          {comment.comments.map((nestedComment) => (
            <Comment key={nestedComment.id} comment={nestedComment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;

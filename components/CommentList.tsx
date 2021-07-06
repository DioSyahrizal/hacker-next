import React, { FC } from "react";
import { CommentStory } from "../interfaces/stories";
import Comment from "./Comment";

interface Props {
  comments: CommentStory["comments"];
}

const CommentList: FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;

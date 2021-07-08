import React from "react";
import { NextPage } from "next";
import Error from "next/error";
import axios from "axios";

import { CommentStory } from "../interfaces/stories";
import Layout from "../components/Layout";

import styles from "../styles/Story.module.scss";
import CommentList from "../components/CommentList";

interface Props {
  story: CommentStory;
}

const Story: NextPage<Props> = ({ story }) => {
  if (!story) {
    return <Error statusCode={503} />;
  }
  return (
    <Layout title={story.title} description="Comment" backButton>
      <main className={styles.story}>
        <h1 className={styles.story__title}>
          <a href={story.url}>{story.title}</a>
        </h1>
        <div className={styles.story__details}>
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>

        {story.comments.length > 0 ? (
          <CommentList comments={story.comments} />
        ) : null}
      </main>
    </Layout>
  );
};

Story.getInitialProps = async ({ query }) => {
  const storyId = query.id;
  let story;
  try {
    const response = await axios(
      `https://node-hnapi.herokuapp.com/item/${storyId}`
    );
    story = response.data;
  } catch (error) {
    story = null;
  }

  return { story };
};

export default Story;

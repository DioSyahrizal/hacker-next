import Link from "next/link";
import { FC } from "react";

import { Story } from "../interfaces/stories";

import styles from "./StoryList.module.scss";

interface StoryProps {
  stories: Story[];
}

const StoryList: FC<StoryProps> = ({ stories }) => {
  return (
    <div className={styles.story}>
      {stories.map((story) => {
        return (
          <div className={styles.story__wrapper} key={story.id}>
            <h2 className={styles.story__title}>
              <a href={story.url}>{story.title}</a>
            </h2>
            <div className={styles.story__details}>
              <span>{story.points || 0} points</span>
              <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryList;

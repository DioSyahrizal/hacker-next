import { NextPage } from "next";
import Link from "next/link";
import Error from "next/error";
import axios from "axios";

import { Story } from "../interfaces/stories";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";

interface Props {
  stories: Story[];
  page: number;
}

const Index: NextPage<Props> = ({ stories, page }) => {
  if (stories.length <= 0) {
    return <Error statusCode={503} />;
  }

  return (
    <Layout
      title="Hacker Next"
      description="A Hacker News clone made with Next.js"
    >
      <StoryList stories={stories} />

      <footer className={styles.footer}>
        <Link href={`/?page=${page + 1}`}>
          <a>Next Page ({page + 1})</a>
        </Link>
      </footer>
    </Layout>
  );
};

Index.getInitialProps = async function ({ req, res, query }) {
  let stories = [];
  let page = Number(query.page) || 1;
  try {
    const res = await axios.get(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    );
    stories = await res.data;
  } catch (error) {
    stories = [];
  }

  return { page, stories };
};

export default Index;

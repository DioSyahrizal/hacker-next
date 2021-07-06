import { NextPage } from "next";
import Error from "next/error";
import axios from "axios";

import { Story } from "../interfaces/stories";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";

interface Props {
  stories: Story[];
}

const Index: NextPage<Props> = ({ stories }) => {
  if (stories.length <= 0) {
    return <Error statusCode={503} />;
  }

  return (
    <Layout
      title="Hacker Next"
      description="A Hacker News clone made with Next.js"
    >
      <StoryList stories={stories} />
    </Layout>
  );
};

Index.getInitialProps = async function () {
  let stories = [];
  try {
    const res = await axios.get("https://node-hnapi.herokuapp.com/news?page=1");
    stories = await res.data;
  } catch (error) {
    stories = [];
  }

  return { stories };
};

export default Index;

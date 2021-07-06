import React, { FC } from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "./Layout.module.scss";

interface Props {
  title: string;
  description: string;
}

const Layout: FC<Props> = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.container}>
        <nav>
          <Link href="/">
            <a>
              <span className={styles.container__maintitle}>Hacker Next</span>
            </a>
          </Link>
        </nav>

        {children}
      </div>
    </div>
  );
};

export default Layout;

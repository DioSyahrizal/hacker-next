import React, { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import styles from "./Layout.module.scss";

interface Props {
  title: string;
  description: string;
  backButton?: boolean;
}

const Layout: FC<Props> = ({ children, title, description, backButton }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.container}>
        <nav>
          {backButton && (
            <span className={styles.back_button} onClick={() => router.back()}>
              &#x2b05;
            </span>
          )}
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

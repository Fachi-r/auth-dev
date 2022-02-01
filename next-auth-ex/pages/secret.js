import { signIn, signOut, useSession } from "next-auth/react";
import styles from '../styles/Home.module.css'

const secret = () => {
  const { data: session, loading } = useSession();

  return !session ? (
    <>
      <h1 className={styles.title}>You are not signed in</h1>
      <button onClick={signIn}>Sign In</button>
    </>
  ) : (
    <>
      <div>This is a secret Page 🌚</div>
      <h2>
        Signed in as:{" "}
        <span className={styles.username}>{session.user.email}</span>
      </h2>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
  //   !session ? (
  //     <div>Loading ...</div>
  //   ) : (
  //     <div>This is a secret Page 🌚</div>
  //   );
};

export default secret;

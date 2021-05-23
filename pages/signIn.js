import Button from "../components/Button";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/SignIn.module.css";
import FooterPage from "../components/Footer";
export default function SignInPage({
  signInWithGoogle,
  title,
  keywords,
  description,
}) {
  return (
    <div className="h-screen bg-gray-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.signInContainer}>
        <Image src="/images/chatlify_logo.png" width="200" height="60" />
        <p>The easiest way to chat with people all around the world.</p>
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}

SignInPage.defaultProps = {
  title:
    "Chattify 1.0 | The easiest way to chat with people all around the world.",
  description: "Talk the buddies around the world!",
  keywords:
    "nextjs chat, nextjs firebase chat, nextjs chat, nextjs messenger, tailwind nextjs messenger",
};

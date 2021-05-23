import Head from "next/head";

import HeaderPage from "./Header";
import FooterPage from "./Footer";
export default function Layout({
  user,
  title,
  keywords,
  description,
  children,
  signOut,
}) {
  const { displayName, photoURL } = user;
  return (
    <div className="h-screen bg-gray-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full h-screen bg-white  shadow-2xl">
          <HeaderPage
            displayName={displayName}
            photoURL={photoURL}
            signOut={signOut}
          />
          <div>{children}</div>
          <FooterPage />
        </div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Chattify 1.0 | The easiest way to chat with people all around the world.",
  description: "Talk the buddies around the world!",
  keywords:
    "nextjs chat, nextjs firebase chat, nextjs chat, nextjs messenger, tailwind nextjs messenger",
};

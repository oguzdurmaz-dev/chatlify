import Button from "../components/Button"
import Image from "next/image"
import styles from "../styles/SignIn.module.css"
export default function SignInPage({signInWithGoogle}) {
    return (
        <div className="h-screen bg-gray-300">
            <div className={styles.signInContainer}>
            <Image src="/images/chatlify_logo.png" width="200" height="60"/>
            <p>The easiest way to chat with people all around the world.</p>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        </div>
    )
}

/** @format */

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Home() {
	const session = useSession();
	console.log("session", session);
	if (session.data == null) {
		return (
			<div>
				<button onClick={signIn}> Auth</button>
			</div>
		);
	}
	return (
		<div className={styles.container}>
			<div>Hello Auth</div>
			<button onClick={signOut}>SignOut</button>
		</div>
	);
}

/** @format */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: "Ov23liBVilx7hXpsoQkm",
			clientSecret: "0abb2615016f1c3c1e223853749b4801d89bad36",
		}),
	],
};
export default NextAuth(authOptions);

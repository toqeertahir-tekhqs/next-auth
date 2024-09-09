/** @format */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: "Ov23liCIr79VYqkqk00K",
			clientSecret: "d6a9128244641f7df2d6f20d81547bc212d1c319",
		}),
	],
};
export default NextAuth(authOptions);

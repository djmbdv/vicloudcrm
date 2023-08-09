import type { AfterCallback } from "@auth0/nextjs-auth0";
import { handleAuth, handleCallback, HandlerError } from "@auth0/nextjs-auth0";
import { trpcClient } from "@utils/trpc";

const afterCallback: AfterCallback = async (_, __, session) => {
  if (session.user.email && typeof session.user.email === "string") {
    const { email } = session.user;
    const user = await trpcClient.session.register.mutate({
      email,
      name: typeof session.user.name === "string" ? session.user.name : "user",
      givenName:
        typeof session.user.given_name === "string"
          ? session.user.given_name
          : undefined,
      nickname:
        typeof session.user.nickname === "string"
          ? session.user.nickname
          : undefined,
      familyName:
        typeof session.user.family_name === "string"
          ? session.user.family_name
          : undefined,
      picture:
        typeof session.user.picture === "string"
          ? session.user.picture
          : undefined,
    });
    const newSession = {
      ...session,
      user: {
        ...session.user,
        localId: typeof user?.id === "string" ? user?.id : "",
      },
    };
    return newSession;
  }
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      if (error instanceof HandlerError) {
        res.status(error.status || 500).end(error.message);
      }
    }
  },
});

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import StandardLayout from "@layouts/StandardLayout";
import NotificationProvider from "@providers/NotificationProvider";
import type { NextPageWithLayout } from "@utils/pageLayout";
import trpc from "@utils/trpc";
import type { AppProps } from "next/app";
import type { FC } from "react";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const Layout = Component.Layout ?? StandardLayout;
  return (
    <UserProvider>
      <NotificationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationProvider>
    </UserProvider>
  );
};

export default trpc.withTRPC(MyApp);

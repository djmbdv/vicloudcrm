import "@styles/globals.css";

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

const MyApp: FC<AppPropsWithLayout> = ({ Component, pageProps }) => (
  <UserProvider>
    {Component.Layout ? (
      <Component.Layout>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </Component.Layout>
    ) : (
      <StandardLayout>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </StandardLayout>
    )}
  </UserProvider>
);

export default trpc.withTRPC(MyApp);

import type { NextComponentType, NextPage, NextPageContext } from "next";
import type { FC, ReactElement } from "react";

export type WithLayoutProps = {
  Layout?: FC<{
    children:
      | ReactElement<NextComponentType<NextPageContext, unknown, unknown>>
      | ReactElement<NextComponentType<NextPageContext, unknown, unknown>>[];
  }>;
};

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> &
  WithLayoutProps;

export type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export type Layout = FC<LayoutProps>;

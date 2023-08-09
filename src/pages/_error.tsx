import ErrorLayout from "@layouts/ErrorLayout";
import type { NextPageWithLayout } from "@utils/pageLayout";
import type { ErrorProps } from "next/error";
import NextErrorComponent from "next/error";

const ErrorPage: NextPageWithLayout<ErrorProps> = (props) => {
  const { statusCode } = props;

  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.Layout = ErrorLayout;

export default ErrorPage;

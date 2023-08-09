import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import DashboardLayout from "@layouts/DashboardLayout";
import type { NextPageWithLayout } from "@utils/pageLayout";

const DashboardUserPage: NextPageWithLayout = () => <p>hi</p>;

DashboardUserPage.Layout = DashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default DashboardUserPage;

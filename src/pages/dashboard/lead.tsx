
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsersTable from "@components/users/Table";
import DashboardLayout from "@layouts/DashboardLayout";
import type { NextPageWithLayout } from "@utils/pageLayout";

const DashboardUserPage: NextPageWithLayout = () => <UsersTable />;

export const getServerSideProps = withPageAuthRequired();

DashboardUserPage.Layout = DashboardLayout;

export default DashboardUserPage;

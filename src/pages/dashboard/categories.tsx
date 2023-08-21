import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ItemsTable from "@components/users/Table";
import DashboardLayout from "@layouts/DashboardLayout";
import type { NextPageWithLayout } from "@utils/pageLayout";

const DashboardCategoriesPage: NextPageWithLayout = () => <ItemsTable />;

export const getServerSideProps = withPageAuthRequired();

DashboardCategoriesPage.Layout = DashboardLayout;

export default DashboardCategoriesPage;

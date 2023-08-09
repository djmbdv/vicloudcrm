import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ItemsTable from "@components/items/Table";
import DashboardLayout from "@layouts/DashboardLayout";
import type { NextPageWithLayout } from "@utils/pageLayout";

const DashboardItemPage: NextPageWithLayout = () => <ItemsTable />;

export const getServerSideProps = withPageAuthRequired();

DashboardItemPage.Layout = DashboardLayout;

export default DashboardItemPage;

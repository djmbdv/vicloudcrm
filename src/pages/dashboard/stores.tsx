import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import StoresTable from "@components/stores/Table";
import DashboardLayout from "@layouts/DashboardLayout";
import type { NextPageWithLayout } from "@utils/pageLayout";

const DashboardStoresPage: NextPageWithLayout = () => <StoresTable />;

export const getServerSideProps = withPageAuthRequired();

DashboardStoresPage.Layout = DashboardLayout;

export default DashboardStoresPage;

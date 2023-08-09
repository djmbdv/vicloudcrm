import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type StandardLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const DashboardLayout: FC<StandardLayoutProps> = ({ children }) => (
  <div>
    <Head>
      <title>Shopito</title>
    </Head>
    <nav className="bg-slate-100 border-gray-900 px-2 sm:px-4 py-2.5 m-1 rounded dark:bg-green-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/custom_logo.png"
            className="mr-3 h-6 sm:h-9 rounded"
            alt="Dakashop Logo"
            width={332}
            height={86}
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Items
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="flex">
      <div className="w-40 h-full shadow-md bg-white px-1">
        <ul className="relative">
          <li className="relative">
            <Link href="/dashboard/users" legacyBehavior>
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                {" "}
                Users
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/dashboard/stores" legacyBehavior>
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                {" "}
                Stores
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/dashboard/categories" legacyBehavior>
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                {" "}
                Categories
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="/dashboard/items" legacyBehavior>
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                {" "}
                Items
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="container mx-auto px-4">
        <div className="px-3">{children}</div>
      </div>
    </div>
    <footer className="px-automt-5 text-center text-sm leading-6 text-slate-500">
      <p>Powered by Shopito &copy;</p>
    </footer>
  </div>
);

export default DashboardLayout;

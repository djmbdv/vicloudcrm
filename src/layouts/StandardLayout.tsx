import type { Layout } from "@utils/pageLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const StandardLayout: Layout = ({ children }) => (
  <div>
    <Head>
      <title>Shopito</title>
    </Head>
    <nav className="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 m-1 rounded dark:bg-slate-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center" legacyBehavior>
          <a>
            <Image
              src="/custom_logo.png"
              className="mr-3 h-6 sm:h-9 rounded"
              alt="Dakashop Logo"
              width={332}
              height={86}
            />
          </a>
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
          <ul className="flex flex-col p-4 mt-4 bg-gray-500 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
              <Link legacyBehavior href="/">
                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/stores">
                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                  Stores
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/items">
                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                  Items
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/dashboard">
                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">
                  Dashboard
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mx-auto px-4">
      <div className="px-3">{children}</div>
    </div>
    <footer className="px-automt-5 text-center text-sm leading-6 text-slate-500">
      <p>Powered by Shopito &copy;</p>
    </footer>
  </div>
);

export default StandardLayout;
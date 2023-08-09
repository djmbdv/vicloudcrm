import type { Layout } from "@utils/pageLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ErrorLayout: Layout = ({ children }) => (
  <div>
    <Head>
      <title>Shopito - Error</title>
    </Head>
    <nav className="bg-slate-100 border-gray-200 px-2 sm:px-4 py-2.5 m-1 rounded dark:bg-red-500">
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

export default ErrorLayout;

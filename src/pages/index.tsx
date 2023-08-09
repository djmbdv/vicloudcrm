import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Button from "@components/Button";
import type { NotificationMessage } from "@providers/NotificationProvider";
import { useNotification } from "@providers/NotificationProvider";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { addNotification } = useNotification();
  const createNotification = (): void => {
    const noti: NotificationMessage = {
      message: `hello world${Math.random()}`,
    };
    addNotification(noti);
  };
  return (
    <>
      <code>Hello World!</code>
      <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
        Compre y venda seguro!
      </h1>
      <Button type="button" onClick={createNotification}>
        Show Notification
      </Button>
    </>
  );
};

export default withPageAuthRequired(Home);

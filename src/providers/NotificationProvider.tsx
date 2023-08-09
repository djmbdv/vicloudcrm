import { XCircleIcon } from "@heroicons/react/24/solid";
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface NotificationMessage {
  message: string;
  onUndo?: () => void;
}
export interface NotificationContextData {
  notifications: NotificationMessage[];
  setNotifications: Dispatch<SetStateAction<NotificationMessage[]>> | null;
}
export const NotificationContext = createContext<NotificationContextData>({
  notifications: [],
  setNotifications: null,
});

export interface UseNotificationData {
  notifications: NotificationMessage[];
  addNotification: (notification: NotificationMessage) => void;
}

export const useNotification = (): UseNotificationData => {
  const { setNotifications, notifications } = useContext(NotificationContext);

  const addNotification = (notification: NotificationMessage): void => {
    if (setNotifications) setNotifications([...notifications, notification]);
  };
  return { notifications, addNotification };
};
const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationMessage[]>([]);
  useEffect(() => {
    const timer = setTimeout(
      () => setNotifications(notifications.slice(1)),
      1500
    );
    return () => clearTimeout(timer);
  }, [notifications]);
  const NotificationContextState: NotificationContextData = useMemo(
    () => ({
      notifications,
      setNotifications,
    }),
    [notifications]
  );

  const undoAction = (notification: NotificationMessage): void => {
    if (notification.onUndo) notification.onUndo();
    setNotifications(notifications.filter((n) => n !== notification));
  };

  const deleteAction = (notification: NotificationMessage): void => {
    setNotifications(notifications.filter((n) => n !== notification));
  };

  return (
    <NotificationContext.Provider value={NotificationContextState}>
      <div className="fixed left-1 bottom-1">
        <div className="flex flex-col space-y-1.5">
          {notifications.map((n) => (
            <div
              key={n.message}
              className="flex items-center p-2 bg-slate-200 rounded-md shadow-lg"
              role="alert"
            >
              <div className="text-sm font-normal  text-black">{n.message}</div>
              <div className="flex items-center ml-auto space-x-2">
                <a
                  className="text-sm font-medium text-black p-1.5 hover:bg-blue-100 rounded-sm hover:text-white dark:hover:bg-gray-700"
                  href="#"
                  onClick={(): void => undoAction(n)}
                >
                  Undo
                </a>
                <button
                  className="h-8 w-8"
                  type="button"
                  aria-label="Close"
                  onClick={(): void => deleteAction(n)}
                >
                  <span className="sr-only">Close</span>
                  <XCircleIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;

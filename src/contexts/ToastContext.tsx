"use client";
import Toast from "@/components/Molecules/Toast/Toast";
import { NotificationInstance } from "antd/es/notification/interface";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IToast {
  show: boolean;
  title: string;
  description: string;
  type: keyof NotificationInstance;
}

const ToastContext = createContext<Dispatch<SetStateAction<IToast>> | null>(
  null
);

interface IToastProviderProps {
  children: ReactNode;
}
export const ToastProvider = ({ children }: IToastProviderProps) => {
  const [toastController, setToastController] = useState<IToast>({
    description: "",
    show: false,
    title: "",
    type: "info",
  });
  useEffect(() => {
    if (toastController.show) {
      setToastController({
        description: "",
        show: false,
        title: "",
        type: "success",
      });
    }
  }, [toastController]);
  return (
    <ToastContext.Provider value={setToastController}>
      {children}
      <Toast {...toastController} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext) as Dispatch<SetStateAction<IToast>>;
};

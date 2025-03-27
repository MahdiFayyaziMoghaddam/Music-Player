import { useToast } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useContext,
  useCallback,
  memo,
} from "react";
import { BiSolidError } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

type ToastStatus = "success" | "fail" | "info";

interface ToastProps {
  status?: ToastStatus;
  title?: string;
  description?: string;
}

type ToastFunction = (props: ToastProps) => void;

interface IToastProvider {
  children: ReactNode;
}

// Memoized Toast Component
const ToastContent = memo(({ status, title, description }: ToastProps) => (
  <div
    className="flex flex-wrap items-stretch gap-2 p-2 pr-3 bg-linear-0 from-dark-800 to-dark-700 rounded-sm max-w-65 ml-15 z-9"
    style={{ borderBottom: "2px solid var(--primary-color)" }}
  >
    {status === "success" ? (
      <FaCheckCircle className="size-7 text-green-400 shrink-0" />
    ) : status === "info" ? (
      <FaCircleInfo className="size-7 text-blue-400 shrink-0" />
    ) : (
      <BiSolidError className="size-7 text-yellow-300 shrink-0" />
    )}
    <div className="grow-1 shrink-0">
      <p className="text-xl text-dark-100 line-clamp-1">{title}</p>
      <p className="text-sm text-dark-400 line-clamp-1">{description}</p>
    </div>
  </div>
));

ToastContent.displayName = "ToastContent";

const ToastContext = createContext<ToastFunction | null>(null);

const ToastProvider = ({ children }: IToastProvider) => {
  const toast = useToast();

  const Toast: ToastFunction = useCallback(
    ({ status, title, description }) => {
      toast({
        duration: 3000,
        position: "bottom-right",
        render: () => (
          <ToastContent
            status={status}
            title={title}
            description={description}
          />
        ),
      });
    },
    [ToastContent]
  );

  return (
    <ToastContext.Provider value={Toast}>{children}</ToastContext.Provider>
  );
};

const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

export { useToastContext, ToastProvider };

"use client";
import { AudioProvider } from "@/contexts/AudioContext";
import { StateProvider } from "@/contexts/StateContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, type ThemeConfig } from "antd";
import { ReactNode, useEffect } from "react";

interface IProviderProps {
  children: ReactNode;
}

const theme: ThemeConfig = {
  // token: {
  //   colorPrimary: "red", // Custom primary color (adjust as needed)
  //   colorBgBase: "green", // Background color
  //   colorBgContainer: "pink", // Slightly lighter background
  //   colorTextBase: "yellow", // Light text color
  //   colorBorder: "blue", // Border color
  //   colorBgElevated: "var(--color-dark-800)", // Card & modal backgrounds
  // },
  // components: {
  //   Dropdown: {
  //     paddingBlock: 0,
  //   },
  // },
};

function Provider({ children }: IProviderProps) {
  return (
    <>
      <AntdRegistry>
        <ToastProvider>
          <StateProvider>{children}</StateProvider>
        </ToastProvider>
      </AntdRegistry>
    </>
  );
}

export default Provider;

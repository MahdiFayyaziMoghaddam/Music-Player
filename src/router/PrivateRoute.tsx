import { ReactNode } from "react";
import Layout from "../layout/Layout";

interface IPrivateRoute {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IPrivateRoute) {
  // localStorage.getItem('music-player-logged-user-token')
  return <Layout>{children}</Layout>
  // return <>{true ? <Layout>{children}</Layout> : <Navigate to={"/login"} replace />}</>;
}

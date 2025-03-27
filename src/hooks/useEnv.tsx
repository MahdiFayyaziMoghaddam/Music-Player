export type GlobalEnv = {
  env: {
    VITE_SERVER_API: string;
    VITE_DATABASE_API: string;
    VITE_APP_VERSION: string;
  };
} & ImportMeta;

export default function useEnv() {
  const {env} = import.meta as GlobalEnv;
  console.log(env)
  return env;
}
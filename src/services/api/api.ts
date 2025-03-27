export const ServerAPI = (
  import.meta as { env: { VITE_SERVER_API: string } } & ImportMeta
).env.VITE_SERVER_API;
export const DataBaseAPI = (
  import.meta as { env: { VITE_DATABASE_API: string } } & ImportMeta
).env.VITE_DATABASE_API;

import { dbApiRequest, serverApiRequest } from "./apiRequest";

export const fetchToFindPath = async (fileFullNames: string[]) => {
  const { data } = await serverApiRequest.post(`/path`, { fileFullNames });
  return data;
};

export const fetchToSendToDB = async (path: string) => {
  dbApiRequest
    .post(`/musics`, { path })
    .then((res) => console.log(`send to db status:`, res.status))
    .catch((err) => console.log(err));
};

export const fetchToGetFromDB = async () => {
  const { data } = await dbApiRequest(`/musics`);
  return data;
};

interface IFetchToGetFileDataWithPath {
  allPaths: string[];
}

export const fetchToGetFileDataWithPath = async ({
  allPaths,
}: IFetchToGetFileDataWithPath) => {
  const { data } = await serverApiRequest.post(`/file`, { allPaths });
  return data;
};

import Router from "./router/router";
import KeyListener from "./utils/KeyListener";

const App = () => {
  window.oncontextmenu = (e) => e.preventDefault();

  // async function fetching() {
  //   // const {paths}: {paths: string[]} = await fetchToFindPath(['spotifydown.com - WAKE UP!.mp3', 'Out Of My League.mp3'])

  //   // paths.forEach(async(path) => {
  //   //   await fetchToSendToDB(path)
  //   // })

  //   const dbResult: { id: string; path: string }[] = await fetchToGetFromDB();
  //   const allPaths = dbResult.map((dataObj) => {
  //     return dataObj.path;
  //   });

  //   console.log(allPaths);

  //   const res: {
  //     metadataList: ({
  //       imageData: {
  //         format: string;
  //         type: string;
  //         description: string;
  //         data: any;
  //       };
  //       data: string;
  //     } & AudioMetadata)[];
  //   } = await fetchToGetFileDataWithPath({ allPaths });

  //   res.metadataList.forEach((metadata) => {
  //     if (metadata?.imageData) {
  //       const imageBlob = new Blob([metadata.imageData.data], {type: metadata.imageData.format,})
  //       metadata.image = URL.createObjectURL(imageBlob);
  //     }
  //     const byteCharacters = atob(metadata.data);
  //     const byteNumbers = new Array(byteCharacters.length);
  //     for (let i = 0; i < byteCharacters.length; i++) {
  //       byteNumbers[i] = byteCharacters.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);

  //     const blob = new Blob([byteArray], { type: "audio/mpeg" });

  //     metadata.url = URL.createObjectURL(blob);

  //     console.log(metadata)

  //     dispatch({
  //       type: "ADD_MUSIC",
  //       value: {
  //         album: metadata.album,
  //         artists: metadata.artists,
  //         duration: metadata.duration,
  //         image: metadata.image,
  //         size: metadata.size,
  //         title: metadata.title,
  //         url: metadata.url,
  //       },
  //     });
  //   });

  //  res.metadataList.url = URL.createObjectURL(res.metadataList.url)

  // const blobs = res.metadataList.map((metadata) => {
  //   const blob = new Blob([metadata.fileBuffer], { type: "audio/mpeg" });
  //   return blob
  // });
  // await audioMetadata(blobs)

  return (
    <>
      <KeyListener />
      <Router />
    </>
  );
};
export default App;

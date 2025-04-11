import Table from "@/components/Molecules/Table/Table";
import TableHead from "@/components/Molecules/Table/TableHead";
import TableLibraryRow from "@/components/Molecules/Table/TableLibraryRow";
import Toast from "@/components/Molecules/Toast/Toast";
import PlayingView from "@/components/Organisms/PlayingView/PlayingView";

export default function Home() {
  // console.log(fs.readFileSync("./music/Phantom.mp3"));
  return (
    <>
      <div className="relative flex items-start justify-end overflow-hidden grow">
        <div className="flex flex-col justify-start items-center h-full grow overflow-auto scrollbar-hidden">
          <Table
            className="bg-dark-700/92 my-5"
            header={
              <TableHead>
                <th className="w-8">#</th>
                <th className="w-80">Title</th>
                <th className="w-60">Album</th>
                <th className="w-30">Duration</th>
                <th className="w-40">Actions</th>
              </TableHead>
            }
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
              <TableLibraryRow
                key={n}
                number={n}
                title="Music Title"
                album="Music Album"
                authors="Unknown"
                imgSrc={n % 2 ? "./images/paint.jpg" : ""}
                selected={n === 5 ? true : false}
              />
            ))}
          </Table>
        </div>
        <PlayingView />
      </div>

      <Toast type={"success"} />
    </>
  );
}

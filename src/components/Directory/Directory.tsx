import { useStateContext } from "../../contexts/StateContext";
import Table from "../Table/Table";
import Status from "../Status/Status";
import { memo } from "react";

const Directory = memo(() => {
  const { state } = useStateContext();

  return (
    <>
      <div className="relative z-0 flex flex-col items-center h-full px-4 overflow-auto grow-1 max-sm:px-1 scrollbar-hidden">
        {state.allMusics.length > 0 ? <Table /> : <Status />}
      </div>
    </>
  );
});
export default Directory;

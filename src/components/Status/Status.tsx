import { TbCloudUpload } from "react-icons/tb";
import { ForwardedRef, useRef } from "react";

export default function Status() {
  const inputRef: ForwardedRef<HTMLInputElement> = useRef(null);
  return (
    <div className="flex flex-col items-center bg-gradient-main bg-dark1 py-12 px-20 rounded-2xl gap-8 mt-[18vh] max-2xl:py-8 max-2xl:px-14 max-2xl:gap-5 max-sm:py-2 max-sm:px-5 max-sm:gap-1 max-sm:mt-[25vh] border-solid border-dark2">
      <div className="size-28 text-primary max-2xl:size-20 max-sm:size-14">
        <TbCloudUpload strokeWidth="1.5px" />
      </div>

      <p className="text-3xl text-title max-2xl:text-2xl max-sm:text-sm">
        Music list is empty please import a music ...
      </p>

      <label
        className="py-3 text-2xl cursor-pointer bg-gradient-main rounded-lg px-7 text-primary max-2xl:scale-[0.7] max-sm:scale-[0.4]"
        onClick={() => {
          inputRef.current?.click()
        }}
      >
        Import Music
      </label>
      {/* <FileDialog ref={inputRef} /> */}
    </div>
  );
}

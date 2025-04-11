import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateTypes = {
  volume: number;
  prevVolume: number;
  repeatType: "all" | "once" | "off";
  isShowFileDialog: boolean;
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState: {
    volume: 0,
    prevVolume: 0,
    repeatType: "all",
    isShowFileDialog: false,
  } as initialStateTypes,
  reducers: {
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const controlsActions = controlsSlice.actions;

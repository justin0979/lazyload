import { SELECTED_SONG } from "./types";

export const selectSong = (song) => {
  return {
    type: SELECTED_SONG,
    payload: song,
  };
};

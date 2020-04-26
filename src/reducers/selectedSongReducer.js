import { SELECTED_SONG } from "actions/types";

export default (song = null, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return action.payload;
    default:
      return song;
  }
};

import { combineReducers } from "redux";
import selectedSongReducer from "./selectedSongReducer";
import songsReducer from "./songsReducer";

export default combineReducers({
  selectedSong: selectedSongReducer,
  songs: songsReducer,
});

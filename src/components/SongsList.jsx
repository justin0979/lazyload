import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectSong } from "actions";

const SongsList = (props) => {
  const [show, setShow] = useState(false);
  const showLink = () => {
    if (show) {
      return <Link to="/song">Show Selected Song</Link>;
    } else return;
  };

  return (
    <div>
      <ul>
        {props.songs.map((song) => {
          return (
            <li key={song.title}>
              <h1>
                {song.title} by {song.band}
              </h1>
              <button
                onClick={() => {
                  setShow(true);
                  props.selectSong(song);
                }}
              >
                Select Song
              </button>
            </li>
          );
        })}
      </ul>
      {showLink()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  songs: state.songs,
});

export default connect(mapStateToProps, { selectSong })(SongsList);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Song = (props) => {
  return (
    <div>
      <h1>
        {props.song.title} by {props.song.band}
      </h1>
      <Link to="/">Go to list</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({ song: state.selectedSong });

export default connect(mapStateToProps)(Song);

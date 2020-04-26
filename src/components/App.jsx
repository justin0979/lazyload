import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import SongsList from "./SongsList";
const Song = lazy(() => import("./Song"));

const App = () => {
  const showSong = () => (
    <Suspense fallback="getting song">
      <Song />
    </Suspense>
  );

  return (
    <div className="app">
      <HashRouter>
        <Route path="/" exact component={SongsList} />
        <Route path="/song" component={showSong} />
      </HashRouter>
    </div>
  );
};

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
      Will the routes show
      <BrowserRouter>
        <Route path="/" exact component={SongsList} />
        <Route path="/song" component={showSong} />
      </BrowserRouter>
    </div>
  );
};

export default App;

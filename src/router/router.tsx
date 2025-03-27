import { Routes, Route } from "react-router-dom";
import Player from "../pages/Player";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Panel from "../pages/Panel";
import Playlists from "../pages/Playlists";
import Playlist from "../pages/Playlist";
import Collection from "../pages/Collection";
import Landing from "../pages/Landing";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/panel" element={<PrivateRoute children={<Panel />} />} />
      <Route path="/" element={<PrivateRoute children={<Player />} />} />
      <Route
        path="/playlists"
        element={<PrivateRoute children={<Playlists />} />}
      />
      <Route
        path="/playlists/:id"
        element={<PrivateRoute children={<Playlist />} />}
      />
      <Route
        path="/collection"
        element={<PrivateRoute children={<Collection />} />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;

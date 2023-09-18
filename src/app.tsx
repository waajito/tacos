import "./app.css";
import CreateOrJoinRoom from "./routes/createOrJoinRoom";
import Router, { Route } from "preact-router";
import WaitingRoom from "./routes/waitingRoom";
import Room from "./routes/room";
import { CardWithForm } from "./routes/test";

export function App() {
  return (
    <Router>
      <Route path="/" component={CreateOrJoinRoom} />
      <Route path="/room" component={WaitingRoom} />
      <Route path="/room/:roomID" component={Room} />
      <Route path="/test" component={CardWithForm} />

      <div default>sorry this page does not exist</div>
    </Router>
  );
}

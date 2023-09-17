import "./app.css";
import { NextUIProvider } from "@nextui-org/react";
import CreateOrJoinRoom from "./pages/createOrJoinRoom";

export function App() {
  return (
    <NextUIProvider>
      <CreateOrJoinRoom />
    </NextUIProvider>
  );
}

import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

render(
  <NextUIProvider>
    <main className="dark text-foreground bg-background">
      <App />
    </main>
  </NextUIProvider>,
  document.getElementById("app")!
);

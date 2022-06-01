import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@buildo/bento-design-system/lib/index.css";
import "@buildo/bento-design-system/lib/defaultTheme.css";
import { DesignSystemProvider } from "./ui";
import { defaultMessages } from "./defaultMessages";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <DesignSystemProvider defaultMessages={defaultMessages}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </DesignSystemProvider>
  </React.StrictMode>
);

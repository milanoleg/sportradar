import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const fullRender = (children: ReactNode) =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

export { fullRender as render };

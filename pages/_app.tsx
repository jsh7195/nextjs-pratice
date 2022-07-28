import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      cacheTime: 2000,
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           staleTime: 1000,
  //           cacheTime: 2000,
  //           refetchOnWindowFocus: false,
  //           enabled: false,
  //           retry: false,
  //         },
  //       },
  //     })
  // );

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

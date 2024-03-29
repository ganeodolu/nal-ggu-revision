import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { Analytics } from '@vercel/analytics/react';

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: false,
      staleTime: 1000 * 60 * 60,
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="날꾸" />
        <meta property="og:title" content="당신의 날씨를 꾸미세요! 날꾸!" />
        <meta
          property="og:description"
          content="날꾸는 유저의 기호에 맞게 기상 정보를 받아볼 수 있는 서비스로, 원하는대로 쉽게 자신만의 화면을 커스텀할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://github.com/ganeodolu/nal-ggu-revision/blob/main/public/meta/kakaotalk_800400.png?raw=true"
        />
        <title>날꾸</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        ></link>
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}&submodules=geocoder`}
      ></Script>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Analytics />
    </>
  );
}

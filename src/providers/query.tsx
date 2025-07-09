'use client';

import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 기본 캐싱 시간(1분)
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient(); // 서버에서 실행 중인 경우 새 클라이언트를 반환
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient(); // 브라우저에서 클라이언트가 없는 경우 새 클라이언트를 생성
    return browserQueryClient; // 기존 브라우저 클라이언트를 반환
  }
};

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient(); // 쿼리 클라이언트를 가져옴

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

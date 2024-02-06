'use client'
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

interface ReactQueryProviderProps {
  queries: {key: string, data: any}[]
}

const ReactQueryProvider = async (props: PropsWithChildren<ReactQueryProviderProps>) => {
  const queryClient = new QueryClient()
  const {queries, children} = props
  queries.forEach((query) => {
    queryClient.setQueryData([query.key], query.data)
  })

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {props.children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

export { ReactQueryProvider }
import { Provider } from 'jotai';
import { RouterProvider } from 'react-router-dom';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router/router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router} />
        <div className="text-[1.6rem]">
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: '',
      //   element: <Navigate to="/emoji" />,
      // },
      // {
      //   path: 'emoji',
      //   lazy: async () => {
      //     const { default: Component } = await import('@/pages/emoji');
      //     return { element: <Component /> };
      //   },
      // },
      // {
      //   path: 'ascii',
      //   lazy: async () => {
      //     const { default: Component } = await import('@/pages/ascii');
      //     return { element: <Component /> };
      //   },
      // },
      // {
      //   path: 'nes',
      //   lazy: async () => {
      //     const { default: Component } = await import('@/pages/nes');
      //     return { element: <Component /> };
      //   },
      // },
      // default page
      {
        path: 'example',
        lazy: async () => {
          const { default: Component } = await import('@/pages/example');
          return { element: <Component /> };
        },
      },
      {
        path: '*',
        lazy: async () => {
          const { default: Component } = await import('@/pages/example');
          return { element: <Component /> };
        },
      },
    ],
  },
]);
